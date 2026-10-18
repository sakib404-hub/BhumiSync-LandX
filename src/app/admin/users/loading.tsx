export const UsersLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Banner Skeleton */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-72 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="h-11 w-44 rounded-xl bg-sky-500/20 border border-sky-400/30" />
      </div>

      {/* Filter Toolbar Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-center">
        <div className="lg:col-span-5 h-10 rounded-xl bg-white/[0.06] border border-white/10" />
        <div className="lg:col-span-7 flex flex-wrap gap-2">
          <div className="h-8 w-28 rounded-full bg-sky-500/20" />
          <div className="h-8 w-32 rounded-full bg-white/[0.04]" />
          <div className="h-8 w-36 rounded-full bg-white/[0.04]" />
          <div className="h-8 w-32 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      {/* Directory Table Skeleton */}
      <div className="rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 p-6 space-y-4">
        <div className="h-6 w-full rounded bg-white/[0.06]" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center justify-between gap-4 py-3 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/[0.08]" />
              <div className="space-y-1.5">
                <div className="h-4 w-36 rounded bg-white/[0.08]" />
                <div className="h-3 w-48 rounded bg-white/[0.04]" />
              </div>
            </div>
            <div className="h-6 w-32 rounded-full bg-white/[0.06]" />
            <div className="h-4 w-40 rounded bg-white/[0.04]" />
            <div className="h-6 w-24 rounded bg-white/[0.06]" />
            <div className="h-6 w-12 rounded-full bg-white/[0.06]" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default UsersLoading;
