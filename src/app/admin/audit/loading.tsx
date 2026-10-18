export const AuditLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Banner Skeleton */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="h-14 w-60 rounded-xl bg-white/[0.06] border border-white/10" />
      </div>

      {/* 4 Stat Bento Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl p-5 bg-white/[0.05] border border-white/10 space-y-3">
            <div className="h-3 w-28 rounded bg-white/[0.06]" />
            <div className="h-8 w-20 rounded bg-white/[0.08]" />
            <div className="h-3 w-36 rounded bg-white/[0.04]" />
          </div>
        ))}
      </div>

      {/* Filter Toolbar Skeleton */}
      <div className="rounded-2xl p-4 bg-white/[0.05] border border-white/10 space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          <div className="lg:col-span-5 h-10 rounded-xl bg-white/[0.06]" />
          <div className="lg:col-span-3 h-10 rounded-xl bg-white/[0.06]" />
          <div className="lg:col-span-4 h-10 rounded-xl bg-white/[0.06]" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-2">
            <div className="h-7 w-20 rounded-full bg-sky-500/20" />
            <div className="h-7 w-28 rounded-full bg-white/[0.04]" />
            <div className="h-7 w-32 rounded-full bg-white/[0.04]" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-36 rounded-lg bg-white/[0.06]" />
            <div className="h-8 w-32 rounded-lg bg-sky-500/20" />
          </div>
        </div>
      </div>

      {/* Audit Table Skeleton */}
      <div className="rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 p-6 space-y-4">
        <div className="h-6 w-full rounded bg-white/[0.06]" />
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center justify-between gap-4 py-3 border-t border-white/5">
            <div className="h-4 w-24 rounded bg-white/[0.08]" />
            <div className="h-4 w-36 rounded bg-white/[0.06]" />
            <div className="h-4 w-16 rounded bg-white/[0.04]" />
            <div className="h-4 w-48 rounded bg-white/[0.06]" />
            <div className="h-4 w-32 rounded bg-white/[0.04]" />
            <div className="h-6 w-24 rounded-full bg-white/[0.08]" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AuditLoading;
