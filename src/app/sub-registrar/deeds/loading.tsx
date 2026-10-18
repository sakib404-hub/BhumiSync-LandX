export const SubRegistrarDeedsLoading = () => {
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
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10">
          <div className="space-y-2">
            <div className="h-8 w-80 max-w-full rounded-lg bg-white/15 animate-pulse" />
            <div className="h-4 w-96 max-w-full rounded bg-white/5 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-32 rounded bg-white/10 animate-pulse" />
            <div className="h-7 w-32 rounded-lg bg-white/[0.07] border border-white/10 animate-pulse" />
          </div>
        </div>

        {/* 4 Stat Counters Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 h-28 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
                <div className="h-5 w-5 rounded bg-white/10 animate-pulse" />
              </div>
              <div className="h-7 w-24 rounded bg-white/20 animate-pulse my-1" />
              <div className="h-4 w-28 rounded-full bg-white/5 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Filter Bar Skeleton */}
        <div className="rounded-xl p-3 bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col xl:flex-row justify-between gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
          <div className="h-10 w-full xl:max-w-md rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
          <div className="flex flex-wrap items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-8 w-20 rounded-full animate-pulse ${
                  i === 1
                    ? "bg-sky-400/30 border border-sky-400/40"
                    : "bg-white/5 border border-white/10"
                }`}
              />
            ))}
            <div className="h-8 w-36 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
            <div className="h-8 w-44 rounded-xl bg-sky-400/20 border border-sky-400/30 animate-pulse" />
          </div>
        </div>

        {/* 8-Column Cadastral Table Skeleton */}
        <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="p-4 overflow-x-auto">
            <div className="min-w-[1000px] space-y-3">
              {/* Header */}
              <div className="h-10 w-full rounded-xl bg-slate-950/80 border border-white/10 flex items-center px-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
                ))}
              </div>

              {/* Rows */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-14 w-full rounded-xl bg-white/[0.03] border border-white/5 flex items-center px-4 gap-4"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
                    <div key={j} className="h-4 flex-1 bg-white/5 rounded animate-pulse" />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Row */}
          <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="h-4 w-48 rounded bg-white/10 animate-pulse" />
              <div className="h-5 w-36 rounded-full bg-emerald-500/20 animate-pulse hidden sm:block" />
            </div>
            <div className="h-8 w-48 rounded-xl bg-white/5 border border-white/10 animate-pulse" />
          </div>
        </div>

        {/* Footnote Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-4 gap-2">
          <div className="h-3.5 w-72 rounded bg-white/5 animate-pulse" />
          <div className="h-3.5 w-60 rounded bg-white/5 animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default SubRegistrarDeedsLoading;
