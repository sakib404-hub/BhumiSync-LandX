export const FraudLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Banner Skeleton */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-white/10">
        <div className="space-y-2">
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
          <div className="flex gap-2 pt-2">
            <div className="h-7 w-24 rounded-full bg-white/[0.06]" />
            <div className="h-7 w-28 rounded-full bg-rose-500/15" />
            <div className="h-7 w-32 rounded-full bg-amber-500/15" />
          </div>
        </div>
        <div className="h-11 w-48 rounded-xl bg-white/[0.06] border border-white/10" />
      </div>

      {/* Tabs & Filter Bar Skeleton */}
      <div className="flex justify-between items-center py-2 border-b border-white/10">
        <div className="flex gap-6">
          <div className="h-6 w-20 rounded bg-sky-500/20" />
          <div className="h-6 w-24 rounded bg-white/[0.04]" />
          <div className="h-6 w-24 rounded bg-white/[0.04]" />
        </div>
        <div className="flex gap-3">
          <div className="h-8 w-60 rounded-lg bg-white/[0.06]" />
          <div className="h-8 w-32 rounded-lg bg-white/[0.06]" />
        </div>
      </div>

      {/* Anomaly Cards Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-5 bg-white/[0.05] border border-white/10 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="h-5 w-32 rounded-full bg-rose-500/20" />
                  <div className="h-5 w-24 rounded-full bg-white/[0.06]" />
                  <div className="h-5 w-24 rounded bg-white/[0.06]" />
                </div>
                <div className="h-16 w-full max-w-xl rounded-xl bg-white/[0.04]" />
                <div className="h-4 w-full max-w-2xl rounded bg-white/[0.04]" />
              </div>
              <div className="space-y-2 w-40">
                <div className="h-8 w-full rounded-xl bg-rose-500/20" />
                <div className="h-8 w-full rounded-xl bg-sky-500/20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FraudLoading;
