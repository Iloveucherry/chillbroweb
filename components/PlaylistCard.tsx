export function PlaylistCard({ playlist }: { playlist: { name: string; tracks: number; mood: string } }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
      <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-indigo-500/40 via-violet-500/40 to-slate-800" />
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-semibold">{playlist.name}</p>
          <p className="text-sm text-slate-400">{playlist.tracks} tracks</p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">{playlist.mood}</span>
      </div>
    </div>
  );
}
