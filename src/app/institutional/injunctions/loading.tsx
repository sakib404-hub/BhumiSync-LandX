export const InjunctionsLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-4 w-36 rounded bg-white/[0.06]" />
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="h-9 w-48 rounded-full bg-indigo-500/10 border border-indigo-400/20" />
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

      {/* Search & Filter Toolbar Skeleton */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white/[0.05] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="w-full lg:max-w-md h-12 rounded-xl bg-white/[0.06]" />
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-24 rounded-lg bg-white/[0.04]" />
          ))}
          <div className="h-9 w-40 rounded-lg bg-white/[0.04]" />
        </div>
      </div>

      {/* Two-Column Grid: Form & Ledger Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left: Restraint Order Form */}
        <div className="xl:col-span-5 rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-4">
          <div className="h-6 w-52 rounded bg-white/[0.08]" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 rounded-xl bg-white/[0.04]" />
            ))}
            <div className="h-12 rounded-xl bg-indigo-500/20" />
          </div>
        </div>

        {/* Right: Active Injunctions Ledger */}
        <div className="xl:col-span-7 rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-6 w-48 rounded bg-white/[0.08]" />
            <div className="h-7 w-28 rounded-lg bg-white/[0.04]" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 rounded-xl bg-white/[0.04] border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Statutory Footer Skeleton */}
      <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/5 flex items-center justify-between">
        <div className="h-4 w-80 rounded bg-white/[0.04]" />
        <div className="h-4 w-40 rounded bg-white/[0.04]" />
      </div>
    </main>
  );
};

export default InjunctionsLoading;
