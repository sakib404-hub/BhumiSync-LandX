export const Loading = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-12 animate-pulse min-h-[calc(100vh-8rem)]">
      {/* 1. Header Skeleton */}
      <div className="flex flex-col items-center space-y-4 pt-2">
        <div className="h-6 w-64 rounded-full bg-white/[0.08]" />
        <div className="h-10 w-3/4 max-w-2xl rounded-2xl bg-white/[0.10]" />
        <div className="h-4 w-1/2 max-w-xl rounded-lg bg-white/[0.06]" />
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-40 rounded-xl bg-white/[0.05]" />
          ))}
        </div>
      </div>

      {/* 2. 6-Step Stepper Skeleton */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <div className="h-5 w-56 rounded-lg bg-white/[0.08]" />
          <div className="h-4 w-48 rounded bg-white/[0.05]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-40 rounded-2xl p-4 bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="h-7 w-7 rounded-full bg-white/[0.08]" />
                  <div className="h-4 w-14 rounded-full bg-white/[0.06]" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-4 w-3/4 rounded bg-white/[0.08]" />
                  <div className="h-3 w-full rounded bg-white/[0.04]" />
                </div>
              </div>
              <div className="h-3 w-full rounded bg-white/[0.04] pt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. 3 Core Feature Cards Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-96 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 rounded-xl bg-white/[0.08]" />
                <div className="h-5 w-24 rounded-full bg-white/[0.06]" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-1/2 rounded bg-white/[0.10]" />
                <div className="h-3 w-4/5 rounded bg-white/[0.05]" />
              </div>
              <div className="h-44 rounded-xl bg-white/[0.04] border border-white/[0.05]" />
            </div>
            <div className="h-4 w-full rounded bg-white/[0.05]" />
          </div>
        ))}
      </div>

      {/* 4. Sync Banner Skeleton */}
      <div className="h-28 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between" />
    </div>
  );
};

export default Loading;
