export const MortgagesLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-36 rounded bg-white/[0.06]" />
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="h-9 w-48 rounded-full bg-emerald-500/10 border border-emerald-400/20" />
      </div>

      {/* 4 Stat Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-5 bg-white/[0.05] border border-white/10 space-y-3"
          >
            <div className="h-3 w-28 rounded bg-white/[0.06]" />
            <div className="h-8 w-24 rounded bg-white/[0.08]" />
            <div className="h-4 w-36 rounded bg-white/[0.04]" />
          </div>
        ))}
      </div>

      {/* Plot Search Bar Skeleton */}
      <div className="rounded-2xl p-5 bg-white/[0.05] border border-white/10 space-y-3">
        <div className="h-3 w-40 rounded bg-white/[0.06]" />
        <div className="flex gap-3">
          <div className="flex-1 h-12 rounded-xl bg-white/[0.06]" />
          <div className="h-12 w-48 rounded-xl bg-sky-500/20" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-44 rounded-full bg-white/[0.04]" />
          <div className="h-6 w-44 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      {/* Alert Banner Skeleton */}
      <div className="rounded-2xl p-6 bg-amber-500/10 border border-amber-500/30 space-y-3">
        <div className="h-6 w-72 rounded bg-amber-400/20" />
        <div className="h-4 w-full max-w-3xl rounded bg-amber-400/10" />
        <div className="h-6 w-96 rounded bg-amber-400/15" />
      </div>

      {/* Two-Column Grid Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="xl:col-span-5 rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-4">
          <div className="h-6 w-48 rounded bg-white/[0.08]" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 rounded-xl bg-white/[0.04]" />
            ))}
            <div className="h-12 rounded-xl bg-slate-800" />
          </div>
        </div>

        <div className="xl:col-span-7 rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-4">
          <div className="h-6 w-48 rounded bg-white/[0.08]" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-14 rounded-xl bg-white/[0.04] border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MortgagesLoading;
