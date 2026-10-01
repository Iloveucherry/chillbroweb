"use client";

import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { LibraryPanel } from '@/components/LibraryPanel';
import { MusicPlayer } from '@/components/MusicPlayer';
import { usePlayerStore } from '@/lib/store';

export default function HomePage() {
  const queue = usePlayerStore((state) => state.queue);
  const currentTrack = usePlayerStore((state) => state.currentTrack);
  const setQueue = usePlayerStore((state) => state.setQueue);
  const setCurrentTrack = usePlayerStore((state) => state.setCurrentTrack);

  useEffect(() => {
    if (queue.length) return;
    fetch('/api/music')
      .then((res) => res.json())
      .then((data) => {
        const tracks = data.tracks ?? [];
        setQueue(tracks);
        if (!currentTrack && tracks[0]) setCurrentTrack(tracks[0], 0);
      })
      .catch(() => undefined);
  }, [currentTrack, queue.length, setCurrentTrack, setQueue]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-4">
        <Header />

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Sidebar />
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/50 via-slate-900 to-slate-950 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Chillbro</p>
              <h1 className="mt-2 text-4xl font-bold">Built for your vibe</h1>
            </div>
            <LibraryPanel />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 z-50 border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <MusicPlayer />
      </div>
    </main>
  );
}
