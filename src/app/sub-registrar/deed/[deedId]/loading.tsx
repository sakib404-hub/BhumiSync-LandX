export const DeedDossierLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="fixed -top-[15%] left-[10%] w-[680px] h-[680px] rounded-full bg-sky-900/20 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] -right-[5%] w-[550px] h-[550px] rounded-full bg-blue-900/20 blur-[140px] pointer-events-none -z-10" />

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
                  i === 4
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
          <div className="h-5 w-52 rounded-lg bg-white/15 animate-pulse" />
          <div className="hidden sm:block h-6 w-48 rounded-full bg-white/5 animate-pulse" />
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden md:block h-8 w-44 rounded-full bg-slate-900/80 border border-white/10 animate-pulse" />
          <div className="h-8 w-28 rounded-xl bg-sky-500/15 border border-sky-400/30 animate-pulse" />
          <div className="h-8 w-8 rounded-xl bg-white/5 animate-pulse" />
          <div className="h-8 w-14 rounded-full bg-white/10 animate-pulse" />
        </div>
      </header>

      {/* 3. Main Workspace Skeleton */}
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10 max-w-[1440px]">
        {/* Section 1: Header Skeleton */}
        <div className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 flex flex-col lg:flex-row justify-between gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="space-y-3">
            <div className="h-4 w-36 rounded bg-white/10 animate-pulse" />
            <div className="flex flex-wrap gap-3 items-center">
              <div className="h-8 w-56 rounded bg-white/20 animate-pulse" />
              <div className="h-6 w-32 rounded-full bg-sky-500/20 border border-sky-400/30 animate-pulse" />
              <div className="h-6 w-36 rounded-full bg-emerald-500/20 border border-emerald-500/30 animate-pulse" />
            </div>
            <div className="h-4 w-96 max-w-full rounded bg-white/5 animate-pulse" />
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/60 border border-white/10 shrink-0">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 animate-pulse shrink-0" />
            <div className="space-y-2">
              <div className="h-4 w-40 rounded bg-white/10 animate-pulse" />
              <div className="flex gap-2">
                <div className="h-7 w-28 rounded-lg bg-sky-400/20 border border-sky-400/30 animate-pulse" />
                <div className="h-7 w-28 rounded-lg bg-white/10 border border-white/15 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Pipeline Skeleton */}
        <div className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="h-6 w-56 rounded bg-white/15 animate-pulse" />
            <div className="h-4 w-36 rounded bg-sky-400/30 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-28 rounded-xl p-4 flex flex-col justify-between border ${
                  i === 3
                    ? "bg-sky-500/15 border-sky-400/40 shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                    : i < 3
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="h-3 w-16 rounded bg-white/10 animate-pulse" />
                  <div className="h-5 w-5 rounded-full bg-white/10 animate-pulse" />
                </div>
                <div className="h-4 w-32 rounded bg-white/15 animate-pulse" />
                <div className="h-3 w-24 rounded bg-white/5 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: 3 Bento Cards Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/15 p-5 space-y-4 h-64 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="h-5 w-36 rounded bg-white/15 animate-pulse" />
                <div className="h-5 w-20 rounded-full bg-white/10 animate-pulse" />
              </div>
              <div className="space-y-2.5">
                <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
                <div className="h-14 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
              </div>
              <div className="h-3 w-full rounded bg-white/5 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Section 4: Mismatch Report Skeleton */}
        <div className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/15 p-5 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 animate-pulse" />
              <div className="h-5 w-64 rounded bg-white/15 animate-pulse" />
            </div>
            <div className="w-5 h-5 rounded bg-white/10 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-white/10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Section 5: Seal Chain Skeleton */}
        <div className="rounded-[20px] bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 space-y-4 mb-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="h-6 w-48 rounded bg-white/15 animate-pulse" />
            <div className="h-4 w-36 rounded bg-emerald-400/30 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-32 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            <div className="h-32 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeedDossierLoading;
