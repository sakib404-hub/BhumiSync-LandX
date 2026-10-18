export const Loading = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-pulse">
      {/* Top Dossier Header Skeleton */}
      <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="w-64 h-6 rounded-full bg-white/10" />
            <div className="w-3/4 sm:w-1/2 h-9 rounded-xl bg-white/10" />
            <div className="w-5/6 sm:w-2/3 h-4 rounded bg-white/5" />
            <div className="flex gap-2 pt-1">
              <div className="w-36 h-7 rounded-full bg-white/10" />
              <div className="w-28 h-7 rounded-full bg-white/10" />
              <div className="w-32 h-7 rounded-full bg-white/5" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-40 h-10 rounded-xl bg-sky-400/20" />
            <div className="w-44 h-10 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>

      {/* Main 2-Column Analytical Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 8 cols */}
        <div className="lg:col-span-8 space-y-6">
          {/* Ownership Shares Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="space-y-2">
                <div className="w-56 h-6 rounded bg-white/10" />
                <div className="w-72 h-4 rounded bg-white/5" />
              </div>
              <div className="w-32 h-6 rounded-lg bg-white/10" />
            </div>

            {/* Segmented Bar Skeleton */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="w-40 h-4 rounded bg-white/10" />
                <div className="w-28 h-4 rounded bg-white/10" />
              </div>
              <div className="w-full h-9 rounded-xl bg-slate-950/80 border border-white/10" />
              <div className="flex justify-between pt-1">
                <div className="w-32 h-3.5 rounded bg-white/5" />
                <div className="w-32 h-3.5 rounded bg-white/5" />
                <div className="w-36 h-3.5 rounded bg-white/5" />
              </div>
            </div>

            {/* Table Skeleton */}
            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 space-y-4">
              <div className="w-full h-8 rounded bg-white/10" />
              <div className="w-full h-12 rounded bg-white/5" />
              <div className="w-full h-12 rounded bg-white/5" />
              <div className="w-full h-12 rounded bg-white/5" />
            </div>

            {/* Footnote Skeleton */}
            <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10" />
          </div>

          {/* Risk Assessment Card Skeleton */}
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 space-y-5">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="space-y-2">
                <div className="w-64 h-6 rounded bg-white/10" />
                <div className="w-96 h-4 rounded bg-white/5" />
              </div>
              <div className="w-36 h-7 rounded-full bg-white/10" />
            </div>

            <div className="flex gap-2">
              <div className="w-48 h-8 rounded-xl bg-white/10" />
              <div className="w-48 h-8 rounded-xl bg-white/10" />
              <div className="w-44 h-8 rounded-xl bg-white/10" />
            </div>

            <div className="flex gap-3 pt-2">
              <div className="w-36 h-10 rounded-xl bg-sky-400/20" />
              <div className="w-44 h-10 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>

        {/* Right Column: 4 cols */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex justify-between items-center px-1">
            <div className="w-44 h-6 rounded bg-white/10" />
            <div className="w-24 h-4 rounded bg-white/5" />
          </div>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-900/60 border border-white/10 p-4 sm:p-5 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10" />
                    <div className="space-y-1">
                      <div className="w-28 h-4 rounded bg-white/10" />
                      <div className="w-36 h-3 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="w-16 h-6 rounded-full bg-white/10" />
                </div>
                <div className="w-full h-3.5 rounded bg-white/5" />
              </div>
            ))}
          </div>

          <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
