export const Loading = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7 animate-pulse">
      {/* Portal Header Skeleton */}
      <div className="text-center max-w-3xl mx-auto space-y-3 flex flex-col items-center">
        <div className="w-48 h-6 rounded-full bg-white/10" />
        <div className="w-3/4 sm:w-1/2 h-10 rounded-xl bg-white/10" />
        <div className="w-5/6 sm:w-2/3 h-5 rounded-lg bg-white/5" />
      </div>

      {/* Main Grid: Search Cadastral Record & Scan Deed QR Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10" />
              <div className="space-y-1.5">
                <div className="w-44 h-5 rounded bg-white/10" />
                <div className="w-64 h-3.5 rounded bg-white/5" />
              </div>
            </div>
            <div className="w-32 h-6 rounded-full bg-white/10" />
          </div>

          {/* Survey Pills */}
          <div className="space-y-1.5">
            <div className="w-32 h-3.5 rounded bg-white/10" />
            <div className="w-56 h-8 rounded-xl bg-white/10" />
          </div>

          {/* 4 Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
            <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
            <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
            <div className="h-14 rounded-xl bg-white/5 border border-white/5" />
          </div>

          {/* Sample Chip */}
          <div className="w-full h-11 rounded-xl bg-white/5 border border-white/10" />

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="w-48 h-4 rounded bg-white/10" />
            <div className="w-36 h-10 rounded-xl bg-sky-400/20" />
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="w-36 h-6 rounded bg-white/10" />
            <div className="w-16 h-5 rounded bg-white/10" />
          </div>
          <div className="w-full h-4 rounded bg-white/5" />

          {/* Viewfinder Placeholder */}
          <div className="w-full aspect-square max-h-52 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-xl bg-white/10" />
          </div>

          {/* Button */}
          <div className="w-full h-10 rounded-xl bg-white/10" />
          <div className="w-36 h-4 rounded-full bg-white/5 mx-auto" />
        </div>
      </div>

      {/* 3 Attribute Badges Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl bg-slate-900/60 border border-white/10 p-5 flex items-start gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-white/10 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="w-32 h-4 rounded bg-white/10" />
              <div className="w-full h-3 rounded bg-white/5" />
              <div className="w-2/3 h-3 rounded bg-white/5" />
            </div>
          </div>
        ))}
      </div>

      {/* Live Ledger Preview Skeleton */}
      <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5 sm:p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="w-48 h-6 rounded bg-white/10" />
          <div className="flex gap-2">
            <div className="w-24 h-6 rounded-full bg-white/10" />
            <div className="w-24 h-6 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-950/70 border border-white/10 space-y-2">
              <div className="w-16 h-3 rounded bg-white/10" />
              <div className="w-20 h-4 rounded bg-white/10" />
              <div className="w-14 h-2.5 rounded bg-white/5" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="w-64 h-4 rounded bg-white/5" />
          <div className="w-36 h-4 rounded bg-sky-400/20" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
