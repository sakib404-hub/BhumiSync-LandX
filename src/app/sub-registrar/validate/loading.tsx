export const ValidateDeedLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="fixed top-[-100px] left-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

      {/* 1. Desktop Fixed Sidebar Skeleton */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/85 backdrop-blur-2xl border-r border-white/10 p-4 flex-col justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 pt-1">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 animate-pulse shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
              <div className="h-4 w-24 rounded bg-white/15 animate-pulse" />
              <div className="h-2.5 w-32 rounded bg-white/5 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-10 w-full rounded-xl animate-pulse ${
                  i === 2
                    ? "bg-sky-500/15 border-l-4 border-sky-400 border-y border-r border-sky-400/20"
                    : "bg-white/[0.04]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <div className="h-12 w-full rounded-xl bg-slate-950/70 border border-white/10 animate-pulse" />
          <div className="h-10 w-full rounded-xl bg-white/[0.04] border border-white/10 animate-pulse" />
          <div className="h-9 w-full rounded-xl bg-white/[0.04] animate-pulse" />
        </div>
      </aside>

      {/* 2. Top Navigation Skeleton */}
      <header className="sticky top-0 right-0 z-30 h-16 w-full lg:ml-[260px] lg:max-w-[calc(100%-260px)] bg-slate-950/75 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-5 w-48 rounded-lg bg-white/15 animate-pulse" />
          <div className="hidden sm:block h-6 w-56 rounded-full bg-white/5 animate-pulse" />
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden md:block h-8 w-44 rounded-full bg-slate-900/80 border border-white/10 animate-pulse" />
          <div className="h-8 w-28 rounded-xl bg-sky-500/15 border border-sky-400/30 animate-pulse" />
          <div className="h-8 w-8 rounded-xl bg-white/5 animate-pulse" />
          <div className="h-8 w-14 rounded-full bg-white/10 animate-pulse" />
        </div>
      </header>

      {/* 3. Main Workspace Skeleton */}
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10">
        {/* Top Alert Skeleton (Rule 14B Alert) */}
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
          <div className="flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 animate-pulse shrink-0" />
            <div className="flex flex-col gap-1.5 w-full">
              <div className="h-4 w-56 rounded bg-rose-300/40 animate-pulse" />
              <div className="h-3 w-full max-w-xl rounded bg-rose-300/20 animate-pulse" />
            </div>
          </div>
          <div className="h-7 w-36 rounded-full bg-rose-500/20 border border-rose-500/30 animate-pulse shrink-0" />
        </div>

        {/* 2-Column Responsive Workspace Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Deed Parameter Form Skeleton */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-1.5">
                <div className="h-6 w-48 rounded bg-white/15 animate-pulse" />
                <div className="h-3.5 w-60 max-w-full rounded bg-white/5 animate-pulse" />
              </div>
              <div className="h-6 w-24 rounded-full bg-sky-500/20 border border-sky-400/30 animate-pulse" />
            </div>

            {/* Mouza / Daag */}
            <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

            {/* Khatian & Jurisdiction */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
              <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            </div>

            {/* Seller Name & NID */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
              <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            </div>

            {/* Share to Transact (Quota Flag) & Declared Area */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-rose-500/10 border border-rose-500/30 animate-pulse" />
              <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            </div>

            {/* Buyer */}
            <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

            {/* Button */}
            <div className="h-11 w-full rounded-xl bg-sky-400/30 border border-sky-400/40 animate-pulse mt-2" />
          </div>

          {/* Right Column (7 cols): Audit Reconciliation Skeleton */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-1.5">
                <div className="h-6 w-48 rounded bg-white/15 animate-pulse" />
                <div className="h-3.5 w-36 rounded bg-white/5 animate-pulse" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-6 w-16 rounded-full bg-emerald-500/20 animate-pulse" />
                <div className="h-6 w-18 rounded-full bg-amber-500/20 animate-pulse" />
                <div className="h-6 w-16 rounded-full bg-rose-500/20 animate-pulse" />
              </div>
            </div>

            {/* Verdict Banner Skeleton */}
            <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <div className="w-9 h-9 rounded-lg bg-rose-500/30 animate-pulse shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-4 w-56 rounded bg-rose-300/40 animate-pulse" />
                  <div className="h-3 w-3/4 rounded bg-rose-300/20 animate-pulse" />
                </div>
              </div>
              <div className="h-7 w-32 rounded-full bg-rose-500/30 border border-rose-500/40 animate-pulse shrink-0" />
            </div>

            {/* Table Skeleton */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="h-9 bg-slate-950/80 border-b border-white/10 flex items-center px-3 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
                ))}
              </div>
              <div className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className={`h-9 flex items-center px-3 gap-3 ${
                      i === 6
                        ? "bg-rose-500/[0.08]"
                        : i === 5
                        ? "bg-amber-500/[0.05]"
                        : "bg-white/[0.02]"
                    }`}
                  >
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="h-3.5 flex-1 bg-white/5 rounded animate-pulse" />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Footer Skeleton */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="h-9 w-40 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
                <div className="h-9 w-36 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
              </div>
              <div className="h-10 w-44 rounded-xl bg-white/5 border border-white/10 animate-pulse w-full sm:w-auto" />
            </div>
          </div>
        </div>

        {/* Bottom Stepper Pipeline Skeleton */}
        <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex justify-between items-center">
            <div className="h-5 w-60 rounded bg-white/15 animate-pulse" />
            <div className="h-4 w-32 rounded bg-sky-400/30 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-16 rounded-xl border flex items-center px-4 gap-3 animate-pulse ${
                  i === 1
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : i === 2
                    ? "bg-rose-500/10 border-rose-500/30"
                    : "bg-white/[0.03] border-white/10"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-3.5 w-3/4 rounded bg-white/15" />
                  <div className="h-2.5 w-1/2 rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ValidateDeedLoading;
