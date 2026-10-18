export const Loading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Header Banner Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 animate-pulse" />
            <div className="h-7 w-64 bg-white/15 rounded animate-pulse" />
          </div>
          <div className="h-4 w-96 max-w-full bg-white/10 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-44 rounded-xl bg-white/10 animate-pulse" />
          <div className="h-10 w-44 rounded-xl bg-white/10 animate-pulse" />
        </div>
      </div>

      {/* 2. Stats Ribbon Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 border border-white/10 space-y-3"
          >
            <div className="flex justify-between items-center">
              <div className="h-3 w-28 bg-white/10 rounded animate-pulse" />
              <div className="w-4 h-4 rounded bg-white/10 animate-pulse" />
            </div>
            <div className="h-7 w-32 bg-white/15 rounded animate-pulse" />
            <div className="h-3 w-40 bg-white/5 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* 3. Date Navigator Skeleton */}
      <div className="rounded-2xl p-4 sm:p-5 bg-slate-900/60 border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 overflow-x-auto max-w-full">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-28 rounded-lg bg-white/5 animate-pulse shrink-0" />
          ))}
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="h-9 w-64 rounded-xl bg-white/5 animate-pulse" />
          <div className="h-9 w-36 rounded-xl bg-white/5 animate-pulse" />
        </div>
      </div>

      {/* 4. Hearings Docket List Skeleton */}
      <div className="space-y-6">
        {/* Group 1: Today */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <div className="h-6 w-32 rounded-full bg-white/10 animate-pulse" />
              <div className="h-6 w-72 bg-white/15 rounded animate-pulse" />
            </div>
            <div className="h-4 w-40 bg-white/10 rounded animate-pulse hidden sm:block" />
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-5 sm:p-6 bg-slate-900/60 border border-white/10 grid grid-cols-1 xl:grid-cols-12 gap-4 items-center"
            >
              <div className="xl:col-span-2 space-y-2">
                <div className="h-6 w-24 bg-white/15 rounded animate-pulse" />
                <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-3 space-y-2">
                <div className="h-4 w-40 bg-white/15 rounded animate-pulse" />
                <div className="h-3 w-56 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-3 space-y-2">
                <div className="h-3 w-48 bg-white/10 rounded animate-pulse" />
                <div className="h-3 w-48 bg-white/10 rounded animate-pulse" />
                <div className="h-3 w-32 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-2 space-y-2">
                <div className="h-5 w-36 rounded-full bg-white/10 animate-pulse" />
                <div className="h-3 w-40 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-2 flex flex-col gap-2">
                <div className="h-8 w-full rounded-xl bg-white/10 animate-pulse" />
                <div className="h-8 w-full rounded-xl bg-white/5 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Group 2: Tomorrow */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-3">
              <div className="h-6 w-28 rounded-full bg-white/10 animate-pulse" />
              <div className="h-6 w-64 bg-white/15 rounded animate-pulse" />
            </div>
            <div className="h-4 w-36 bg-white/10 rounded animate-pulse hidden sm:block" />
          </div>

          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl p-5 sm:p-6 bg-slate-900/60 border border-white/10 grid grid-cols-1 xl:grid-cols-12 gap-4 items-center"
            >
              <div className="xl:col-span-2 space-y-2">
                <div className="h-6 w-24 bg-white/15 rounded animate-pulse" />
                <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-3 space-y-2">
                <div className="h-4 w-40 bg-white/15 rounded animate-pulse" />
                <div className="h-3 w-56 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-3 space-y-2">
                <div className="h-3 w-48 bg-white/10 rounded animate-pulse" />
                <div className="h-3 w-32 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-2 space-y-2">
                <div className="h-5 w-36 rounded-full bg-white/10 animate-pulse" />
                <div className="h-3 w-40 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="xl:col-span-2 flex justify-end">
                <div className="h-8 w-24 rounded-xl bg-white/10 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Statutory Footer Skeleton */}
      <div className="h-14 rounded-xl bg-slate-900/60 border border-white/10 animate-pulse" />
    </main>
  );
};

export default Loading;
