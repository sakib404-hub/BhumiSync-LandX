export const Loading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
      {/* 1. Header Banner Skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
        <div className="rounded-2xl bg-slate-900/60 border border-white/15 p-6 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-36 rounded-md bg-white/10 animate-pulse" />
                <div className="h-6 w-24 rounded-full bg-white/10 animate-pulse" />
              </div>
              <div className="h-4 w-72 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-28 rounded-xl bg-white/10 animate-pulse" />
              <div className="h-9 w-28 rounded-xl bg-white/10 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-3 rounded-xl bg-white/5 space-y-1.5">
                <div className="h-2.5 w-16 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-24 bg-white/15 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Asymmetric 2-Column Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Share Mutation Math Card Skeleton */}
          <div className="rounded-2xl bg-slate-900/60 border border-white/15 p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div className="space-y-1.5">
                <div className="h-5 w-48 bg-white/15 rounded animate-pulse" />
                <div className="h-3 w-64 bg-white/10 rounded animate-pulse" />
              </div>
              <div className="h-6 w-28 rounded-full bg-white/10 animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4">
                <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 rounded-lg bg-white/5 animate-pulse" />
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4">
                <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 rounded-lg bg-white/5 animate-pulse" />
                  ))}
                </div>
              </div>
            </div>

            <div className="h-12 rounded-xl bg-white/5 animate-pulse" />
          </div>

          {/* Plot Extract Table Skeleton */}
          <div className="rounded-2xl bg-slate-900/60 border border-white/15 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="h-5 w-44 bg-white/15 rounded animate-pulse" />
              <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-11 rounded-lg bg-white/5 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Field Audit Skeleton */}
          <div className="rounded-2xl bg-slate-900/60 border border-white/15 p-6 space-y-4">
            <div className="h-5 w-40 bg-white/15 rounded animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-14 rounded-xl bg-white/5 animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-slate-900/60 border border-white/15 p-6 space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="h-10 w-10 rounded-xl bg-white/10 animate-pulse" />
              <div className="space-y-1.5 flex-1">
                <div className="h-4 w-32 bg-white/15 rounded animate-pulse" />
                <div className="h-2.5 w-24 bg-white/10 rounded animate-pulse" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 space-y-2">
              <div className="h-3 w-28 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-40 bg-white/15 rounded animate-pulse" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-24 bg-white/10 rounded animate-pulse" />
              <div className="h-28 rounded-xl bg-white/5 animate-pulse" />
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="h-11 rounded-xl bg-white/10 animate-pulse" />
              <div className="h-11 rounded-xl bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
