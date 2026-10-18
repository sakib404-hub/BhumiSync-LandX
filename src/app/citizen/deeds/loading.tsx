export const CitizenDeedsLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient background bloom placeholders */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-sky-500/5 blur-[130px]" />
        <div className="absolute top-[35%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 animate-pulse">
        {/* 1. Header Ribbon Skeleton */}
        <div className="flex flex-col gap-6">
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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-3 w-28 rounded bg-sky-400/20" />
              <div className="h-9 w-48 rounded-lg bg-white/10" />
              <div className="h-4 w-96 max-w-full rounded bg-white/5" />
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-28 rounded-xl bg-white/10" />
              <div className="h-9 w-36 rounded-xl bg-sky-400/20" />
            </div>
          </div>
        </div>

        {/* 2. Bento Stats Ribbon Skeleton (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-32"
            >
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-white/10" />
                <div className="w-7 h-7 rounded-lg bg-white/10" />
              </div>
              <div className="h-7 w-28 rounded-lg bg-white/10" />
              <div className="h-3 w-36 rounded bg-white/5" />
            </div>
          ))}
        </div>

        {/* 3. Active Deed Dossier Skeleton */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/15 space-y-7">
          {/* Dossier Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-48 rounded bg-white/10" />
                <div className="h-5 w-32 rounded-full bg-sky-400/20" />
                <div className="h-5 w-24 rounded-full bg-emerald-400/20" />
              </div>
              <div className="h-3.5 w-72 rounded bg-white/5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-32 rounded-xl bg-white/10" />
              <div className="h-8 w-36 rounded-xl bg-sky-400/20" />
            </div>
          </div>

          {/* Stepper Skeleton (4 steps) */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="h-3.5 w-60 rounded bg-white/10" />
              <div className="h-3.5 w-28 rounded bg-sky-400/20" />
            </div>
            {/* Visual Progress Bar skeleton */}
            <div className="hidden md:block h-1.5 w-full bg-white/10 rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div className="h-3 w-20 rounded bg-white/10" />
                  <div className="h-4 w-28 rounded bg-white/5" />
                  <div className="h-3 w-24 rounded bg-white/5" />
                </div>
              ))}
            </div>
          </div>

          {/* 8-col & 4-col Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
            {/* Left 8 cols */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="h-5 w-40 rounded bg-white/10" />
                <div className="h-3.5 w-28 rounded bg-white/5" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] space-y-2">
                    <div className="h-3 w-16 rounded bg-white/10" />
                    <div className="h-4 w-20 rounded bg-white/5" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[1, 2].map((i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] space-y-2">
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="h-4 w-36 rounded bg-white/5" />
                  </div>
                ))}
              </div>
              <div className="h-10 w-full rounded-xl bg-sky-400/10" />
            </div>

            {/* Right 4 cols */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-between gap-4">
              <div className="w-full flex justify-between items-center pb-2 border-b border-white/10">
                <div className="h-3.5 w-28 rounded bg-sky-400/20" />
                <div className="h-3.5 w-12 rounded bg-white/5" />
              </div>
              <div className="w-36 h-36 rounded-xl bg-white/5" />
              <div className="h-5 w-36 rounded-full bg-emerald-400/10" />
            </div>
          </div>
        </div>

        {/* 4. Table Skeleton */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="h-5 w-40 rounded bg-white/10" />
              <div className="h-3 w-64 rounded bg-white/5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-44 rounded-xl bg-white/10" />
              <div className="h-8 w-24 rounded-xl bg-white/5" />
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="h-12 w-full rounded-xl bg-white/[0.02]" />
            <div className="h-12 w-full rounded-xl bg-white/[0.02]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDeedsLoading;
