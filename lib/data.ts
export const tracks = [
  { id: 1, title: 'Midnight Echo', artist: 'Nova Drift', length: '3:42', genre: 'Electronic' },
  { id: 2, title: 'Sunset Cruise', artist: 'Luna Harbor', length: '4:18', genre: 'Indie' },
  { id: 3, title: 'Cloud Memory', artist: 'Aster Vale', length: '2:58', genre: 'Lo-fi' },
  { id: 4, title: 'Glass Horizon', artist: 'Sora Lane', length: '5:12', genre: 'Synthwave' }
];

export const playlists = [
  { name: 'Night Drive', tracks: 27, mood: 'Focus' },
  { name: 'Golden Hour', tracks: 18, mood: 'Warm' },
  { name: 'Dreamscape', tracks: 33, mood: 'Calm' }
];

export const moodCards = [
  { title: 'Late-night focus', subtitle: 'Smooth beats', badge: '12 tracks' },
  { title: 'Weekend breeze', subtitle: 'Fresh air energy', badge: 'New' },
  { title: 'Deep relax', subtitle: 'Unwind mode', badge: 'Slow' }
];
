export function Sidebar() {
  const nav = ['Discover', 'Library', 'Radio', 'Downloads', 'Liked songs'];

  return (
    <aside className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
      <div className="space-y-3">
        {nav.map((item, index) => (
          <button
            key={item}
            className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm ${
              index === 0 ? 'bg-violet-500/15 text-violet-200' : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <span>{item}</span>
            <span className="text-xs text-slate-400">{index + 1}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-500/30 to-emerald-500/20 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-violet-200">Offline</p>
        <p className="mt-3 text-xl font-bold">Saved for later</p>
        <p className="mt-2 text-sm text-slate-200">12 tracks ready to listen without the internet.</p>
      </div>
    </aside>
  );
}
