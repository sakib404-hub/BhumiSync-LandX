export const Loading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Header Banner Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-3.5 w-48 bg-white/10 rounded animate-pulse" />
          <div className="h-7 w-80 max-w-full bg-white/15 rounded animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-white/10 rounded animate-pulse" />
        </div>
        <div className="h-10 w-48 rounded-xl bg-white/10 animate-pulse shrink-0" />
      </div>

      {/* 2. Top Summary Stat Ribbon Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 border border-white/10 space-y-3"
          >
            <div className="flex justify-between items-center">
              <div className="h-3 w-24 bg-white/10 rounded animate-pulse" />
              <div className="w-4 h-4 rounded bg-white/10 animate-pulse" />
            </div>
            <div className="h-7 w-32 bg-white/15 rounded animate-pulse" />
            <div className="flex justify-between items-center pt-1">
              <div className="h-4 w-24 rounded-full bg-white/5 animate-pulse" />
              <div className="h-3 w-16 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Search & Filter Bar Skeleton */}
      <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-3">
        <div className="h-10 w-full lg:w-96 rounded-xl bg-white/5 animate-pulse" />
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-7 w-28 rounded-full bg-white/5 animate-pulse" />
          ))}
          <div className="h-7 w-36 rounded-xl bg-white/5 animate-pulse ml-auto sm:ml-2" />
        </div>
      </div>

      {/* 4. Table Skeleton */}
      <div className="rounded-[20px] bg-slate-900/60 border border-white/15 overflow-hidden">
        <div className="h-11 bg-slate-950/60 border-b border-white/10 px-4 flex items-center justify-between gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
          ))}
        </div>
        <div className="divide-y divide-white/5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-4 flex items-center justify-between gap-4">
              <div className="h-4 w-28 bg-white/15 rounded animate-pulse shrink-0" />
              <div className="h-4 w-36 bg-white/10 rounded animate-pulse flex-1" />
              <div className="h-4 w-40 bg-white/10 rounded animate-pulse flex-1" />
              <div className="h-6 w-24 rounded-full bg-white/10 animate-pulse shrink-0" />
              <div className="h-4 w-24 bg-white/10 rounded animate-pulse shrink-0" />
              <div className="h-6 w-28 rounded bg-white/5 animate-pulse shrink-0" />
              <div className="h-7 w-24 rounded-lg bg-white/10 animate-pulse shrink-0" />
            </div>
          ))}
        </div>
        <div className="h-12 bg-slate-950/60 border-t border-white/10 px-4 flex items-center justify-between">
          <div className="h-3.5 w-48 bg-white/10 rounded animate-pulse" />
          <div className="h-7 w-48 bg-white/10 rounded animate-pulse" />
        </div>
      </div>

      {/* 5. Statutory Compliance Footer Skeleton */}
      <div className="h-14 rounded-xl bg-slate-900/60 border border-white/10 animate-pulse" />
    </main>
  );
};

export default Loading;
