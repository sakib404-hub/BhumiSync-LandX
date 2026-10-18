export const SystemStatesLoading = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-48 rounded bg-white/[0.06]" />
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-44 rounded-full bg-white/[0.06]" />
          <div className="h-8 w-52 rounded-full bg-white/[0.06]" />
        </div>
      </div>

      {/* 2x2 Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full bg-white/[0.08]" />
              <div className="h-6 w-32 rounded-full bg-white/[0.06]" />
            </div>
            <div className="h-6 w-60 rounded bg-white/[0.08]" />
            <div className="h-4 w-full rounded bg-white/[0.04]" />
            <div className="h-14 rounded-xl bg-slate-950/40 border border-white/5" />
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="h-4 w-28 rounded bg-white/[0.04]" />
              <div className="h-9 w-32 rounded-xl bg-white/[0.08]" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Protocol Banner Skeleton */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/[0.08]" />
          <div className="space-y-1">
            <div className="h-4 w-52 rounded bg-white/[0.08]" />
            <div className="h-3 w-80 rounded bg-white/[0.04]" />
          </div>
        </div>
        <div className="h-8 w-48 rounded-lg bg-white/[0.06]" />
      </div>
    </main>
  );
};

export default SystemStatesLoading;
