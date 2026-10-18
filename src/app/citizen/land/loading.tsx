export const CitizenLandLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient background bloom placeholders */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-sky-500/5 blur-[130px]" />
        <div className="absolute top-[35%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 animate-pulse">
        {/* Profile Ribbon Skeleton */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <div className="h-4 w-32 rounded bg-white/10" />
              <div className="h-3 w-24 rounded bg-white/5" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-24 rounded-lg bg-white/10" />
            <div className="h-8 w-20 rounded-lg bg-white/5" />
          </div>
        </div>

        {/* Title Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-3 w-28 rounded bg-sky-400/20" />
          <div className="h-9 w-48 rounded-lg bg-white/10" />
          <div className="h-4 w-96 rounded bg-white/5" />
        </div>

        {/* Bento Stats Ribbon Skeleton (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-32"
            >
              <div className="flex items-center justify-between">
                <div className="h-3 w-20 rounded bg-white/10" />
                <div className="w-7 h-7 rounded-lg bg-white/10" />
              </div>
              <div className="h-7 w-28 rounded-lg bg-white/10" />
              <div className="h-3 w-36 rounded bg-white/5" />
            </div>
          ))}
        </div>

        {/* 8-col Left & 4-col Right Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <div className="h-6 w-64 rounded bg-white/10" />
                  <div className="h-3 w-80 rounded bg-white/5" />
                </div>
                <div className="h-6 w-36 rounded-full bg-white/10" />
              </div>

              {/* Share meter skeleton */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="h-3 w-32 rounded bg-white/10" />
                  <div className="h-3 w-24 rounded bg-white/10" />
                </div>
                <div className="h-8 w-full rounded-full bg-white/5" />
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="h-16 rounded-xl bg-white/5" />
                  <div className="h-16 rounded-xl bg-white/5" />
                </div>
              </div>

              {/* Meta grid skeleton */}
              <div className="grid grid-cols-4 gap-4 p-4 rounded-xl bg-white/[0.02]">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="h-2.5 w-16 rounded bg-white/10" />
                    <div className="h-4 w-20 rounded bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-36 rounded-xl bg-white/10" />
                <div className="h-10 w-36 rounded-xl bg-white/5" />
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-full gap-5">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="h-5 w-32 rounded bg-white/10" />
                <div className="h-5 w-24 rounded-full bg-white/10" />
              </div>
              <div className="h-3 w-full rounded bg-white/5" />

              {/* 4 Steps vertical skeleton */}
              <div className="flex flex-col gap-5 py-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-white/10" />
                    <div className="flex flex-col gap-1">
                      <div className="h-3.5 w-28 rounded bg-white/10" />
                      <div className="h-2.5 w-36 rounded bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-10 w-full rounded-xl bg-white/10 mt-auto" />
            </div>
          </div>
        </div>

        {/* Search Plot Card Skeleton */}
        <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
          <div className="h-5 w-40 rounded bg-white/10" />
          <div className="h-3 w-80 rounded bg-white/5" />
          <div className="grid grid-cols-5 gap-3 mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 rounded-xl bg-white/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenLandLoading;
