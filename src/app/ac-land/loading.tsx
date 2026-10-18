export const Loading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Stat Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-36 rounded-[20px] bg-slate-900/60 border border-white/10 p-5 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-20 bg-white/10 rounded animate-pulse" />
                <div className="h-8 w-16 bg-white/15 rounded animate-pulse" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 animate-pulse" />
            </div>
            <div className="h-6 w-3/4 rounded-full bg-white/5 animate-pulse" />
          </div>
        ))}
      </div>

      {/* 2. Filter Bar Skeleton */}
      <div className="h-16 rounded-2xl bg-slate-900/60 border border-white/10 p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-white/10 animate-pulse" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-56 rounded-xl bg-white/10 animate-pulse hidden sm:block" />
          <div className="h-8 w-28 rounded-xl bg-white/10 animate-pulse" />
        </div>
      </div>

      {/* 3. Table Skeleton */}
      <div className="rounded-[20px] bg-slate-900/60 border border-white/10 overflow-hidden flex flex-col">
        <div className="h-11 bg-slate-950/80 border-b border-white/10 flex items-center px-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
          ))}
        </div>
        <div className="divide-y divide-white/5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 flex items-center px-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
                <div key={j} className="h-4 flex-1 bg-white/5 rounded animate-pulse" />
              ))}
            </div>
          ))}
        </div>
        <div className="h-14 bg-slate-950/90 border-t border-white/10 flex items-center justify-between px-4">
          <div className="h-4 w-44 bg-white/10 rounded animate-pulse" />
          <div className="h-7 w-52 bg-white/15 rounded animate-pulse" />
        </div>
      </div>

      {/* 4. Bottom Footer Skeleton */}
      <div className="h-12 rounded-xl bg-slate-950/60 border border-white/5 flex items-center px-4 justify-between">
        <div className="h-3 w-64 bg-white/10 rounded animate-pulse" />
        <div className="h-3 w-32 bg-white/5 rounded animate-pulse hidden sm:block" />
      </div>
    </main>
  );
};

export default Loading;
