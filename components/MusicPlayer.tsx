"use client";

import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { PlaylistCard } from '@/components/PlaylistCard';
import { MusicPlayer } from '@/components/MusicPlayer';
import { usePlayerStore } from '@/lib/store';

export default function HomePage() {
  const queue = usePlayerStore((state) => state.queue);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setQueue = usePlayerStore((state) => state.setQueue);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);

  useEffect(() => {
    fetch('/api/music')
      .then((res) => res.json())
      .then((data) => {
        const tracks = data.tracks ?? [];
        setQueue(tracks);

        if (!currentTrack && tracks[0]) {
          setCurrentTrack(tracks[0], 0);
        }
      })
      .catch(() => {
        // no-op in starter mode
      });
  }, [currentTrack, setCurrentTrack, setQueue]);

  const moodCards = [
    { title: 'Late-night focus', subtitle: 'Smooth beats', badge: '12 tracks' },
    { title: 'Weekend breeze', subtitle: 'Fresh air energy', badge: 'New' },
    { title: 'Deep relax', subtitle: 'Unwind mode', badge: 'Slow' }
  ];

  const playlists = [
    { name: 'Night Drive', tracks: 27, mood: 'Focus' },
    { name: 'Golden Hour', tracks: 18, mood: 'Warm' },
    { name: 'Dreamscape', tracks: 33, mood: 'Calm' }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-4">
        <Header />

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Sidebar />

          <section className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/50 via-slate-900 to-slate-950 p-5 shadow-neon">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Featured mix</p>
                  <h1 className="mt-2 text-3xl font-bold md:text-5xl">Chill into the evening</h1>
                </div>
                <button
                  className="rounded-full bg-violet-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
                  onClick={() => {
                    if (queue[0]) setCurrentTrack(queue[0], 0);
                  }}
                >
                  Play now
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">For your mood</h2>
                <button className="text-sm text-violet-300">View all</button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {moodCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-transparent" />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-semibold">{card.title}</p>
                        <p className="text-sm text-slate-300">{card.subtitle}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Trending tracks</h2>
                <button className="text-sm text-violet-300">Refresh</button>
              </div>

              <div className="space-y-3">
                {queue.map((track, index) => (
                  <div key={track.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold">
                        {track.title.slice(0, 1)}
                      </div>
                      <div>
                        <p className="font-medium">{track.title}</p>
                        <p className="text-sm text-slate-400">{track.artist}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-10 text-sm text-slate-300">
                      <span>{new Date(track.duration * 1000).toISOString().slice(14, 19)}</span>
                      <span>{track.genre}</span>
                      <button
                        className="rounded-full bg-violet-500/10 px-3 py-1.5 text-violet-300"
                        onClick={() => setCurrentTrack(track, index)}
                      >
                        {currentTrack?.id === track.id ? 'Now playing' : 'Play'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your playlists</h2>
                <button className="text-sm text-violet-300">+ New</button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {playlists.map((playlist) => (
                  <PlaylistCard key={playlist.name} playlist={playlist} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="sticky bottom-0 z-50 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <MusicPlayer />
      </div>
    </main>
  );
}
