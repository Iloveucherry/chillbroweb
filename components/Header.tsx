import Link from 'next/link';

export function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-emerald-400 text-xl font-black text-white">
          C
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-violet-200">Chillbro</p>
          <h1 className="text-xl font-bold">Music for your flow</h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-0 md:px-8">
        <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
          <span className="text-violet-300">⌕</span>
          <input
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            placeholder="Search songs, artists, playlists..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          Explore
        </Link>
        <Link href="/library" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
          Library
        </Link>
        <button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white">Upgrade</button>
      </div>
    </header>
  );
}
