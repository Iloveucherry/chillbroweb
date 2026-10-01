"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'chillbro-offline';

export default function LibraryPage() {
  const [offlineTracks, setOfflineTracks] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setOfflineTracks(saved ? JSON.parse(saved) : ['Midnight Echo', 'Cloud Memory']);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Chillbro</p>
            <h1 className="mt-2 text-3xl font-bold">Your library</h1>
          </div>
          <Link href="/" className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white">
            Back home
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Offline</p>
            <h2 className="mt-2 text-2xl font-semibold">Saved for travel</h2>
            <ul className="mt-5 space-y-3">
              {offlineTracks.map((track) => (
                <li key={track} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                  <span>{track}</span>
                  <span className="text-emerald-300">Ready</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Quick stats</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Saved playlists</p>
                <p className="mt-2 text-3xl font-bold">3</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Offline tracks</p>
                <p className="mt-2 text-3xl font-bold">{offlineTracks.length}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
