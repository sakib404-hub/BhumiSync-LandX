export const OutboxLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* Header Banner Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
        <div className="space-y-2">
          <div className="h-4 w-48 rounded bg-white/[0.06]" />
          <div className="h-8 w-80 rounded-xl bg-white/[0.08]" />
          <div className="h-4 w-96 rounded-lg bg-white/[0.04]" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-44 rounded-xl bg-white/[0.06]" />
          <div className="h-10 w-44 rounded-xl bg-sky-500/20" />
        </div>
      </div>

      {/* 3 Stat Bento Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-white/[0.05] border border-white/10 space-y-3"
          >
            <div className="h-3 w-36 rounded bg-white/[0.06]" />
            <div className="h-8 w-24 rounded bg-white/[0.08]" />
            <div className="h-4 w-48 rounded bg-white/[0.04]" />
          </div>
        ))}
      </div>

      {/* Filter Toolbar Skeleton */}
      <div className="rounded-2xl p-3.5 bg-white/[0.05] border border-white/10 flex justify-between items-center gap-3">
        <div className="h-10 w-72 rounded-xl bg-white/[0.06]" />
        <div className="h-10 w-96 rounded-xl bg-white/[0.04]" />
        <div className="h-10 w-48 rounded-xl bg-white/[0.06]" />
      </div>

      {/* Outbox Table Skeleton */}
      <div className="rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 p-6 space-y-4">
        <div className="h-6 w-full rounded bg-white/[0.06]" />
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 py-3.5 border-t border-white/5"
          >
            <div className="h-5 w-28 rounded bg-white/[0.08]" />
            <div className="h-5 w-44 rounded bg-white/[0.06]" />
            <div className="h-5 w-36 rounded bg-white/[0.04]" />
            <div className="h-5 w-16 rounded-full bg-white/[0.06]" />
            <div className="h-5 w-48 rounded bg-white/[0.04]" />
            <div className="h-8 w-24 rounded-lg bg-white/[0.08]" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default OutboxLoading;
