"use client";

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'chillbro-playlists';

type Playlist = {
  id: string;
  name: string;
  tracks: number;
  mood: string;
};

export function LibraryPanel() {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 'night-drive', name: 'Night Drive', tracks: 27, mood: 'Focus' },
    { id: 'golden-hour', name: 'Golden Hour', tracks: 18, mood: 'Warm' },
    { id: 'dreamscape', name: 'Dreamscape', tracks: 33, mood: 'Calm' }
  ]);

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      try {
        setPlaylists(JSON.parse(cached));
      } catch {
        // ignore invalid storage
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(playlists));
  }, [playlists]);

  const addPlaylist = () => {
    const name = `My Mix ${playlists.length + 1}`;
    setPlaylists((current) => [
      ...current,
      { id: `${Date.now()}`, name, tracks: 8, mood: 'Fresh' }
    ]);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Library</p>
          <h3 className="mt-2 text-xl font-semibold">Your saved playlists</h3>
        </div>
        <button onClick={addPlaylist} className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white">
          + New
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <div className="mb-4 h-24 rounded-xl bg-gradient-to-br from-violet-500/30 via-pink-500/30 to-slate-800" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{playlist.name}</p>
                <p className="text-sm text-slate-400">{playlist.tracks} tracks</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">{playlist.mood}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
