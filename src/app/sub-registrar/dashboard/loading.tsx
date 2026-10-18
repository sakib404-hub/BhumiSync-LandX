export const SubRegistrarDashboardLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="fixed -top-[15%] left-[10%] w-[680px] h-[680px] rounded-full bg-sky-900/20 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] -right-[5%] w-[550px] h-[550px] rounded-full bg-blue-900/20 blur-[140px] pointer-events-none -z-10" />

      {/* 1. Desktop Fixed Sidebar Skeleton (w-[260px]) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/85 backdrop-blur-2xl border-r border-white/10 p-4 flex-col justify-between">
        {/* Top Branding & Main Navigation */}
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
                  i === 1
                    ? "bg-sky-500/15 border-l-4 border-sky-400 border-y border-r border-sky-400/20"
                    : "bg-white/[0.04]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Station, Profile & Logout */}
        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <div className="h-12 w-full rounded-xl bg-slate-950/70 border border-white/10 animate-pulse" />
          <div className="h-10 w-full rounded-xl bg-white/[0.04] border border-white/10 animate-pulse" />
          <div className="h-9 w-full rounded-xl bg-white/[0.04] animate-pulse" />
        </div>
      </aside>

      {/* 2. Top Navigation Skeleton */}
      <header className="sticky top-0 right-0 z-30 h-16 w-full lg:ml-[260px] lg:max-w-[calc(100%-260px)] bg-slate-950/75 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-5 w-44 rounded-lg bg-white/15 animate-pulse" />
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
        {/* Header Ribbon Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <div className="h-4 w-56 rounded bg-sky-400/20 animate-pulse" />
            <div className="h-8 w-72 rounded-lg bg-white/15 animate-pulse" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-48 rounded-xl bg-white/[0.04] border border-white/15 animate-pulse" />
            <div className="h-9 w-36 rounded-xl bg-emerald-500/10 border border-emerald-500/30 animate-pulse" />
          </div>
        </div>

        {/* 4 Bento Metric Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col justify-between h-36"
            >
              <div className="flex items-start justify-between">
                <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
                <div className="w-8 h-8 rounded-xl bg-white/10 animate-pulse" />
              </div>
              <div className="h-8 w-32 rounded-lg bg-white/20 animate-pulse" />
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <div className="h-3 w-28 rounded bg-white/5 animate-pulse" />
                <div className="h-5 w-20 rounded-full bg-white/10 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Hero Card Skeleton ("Start New Deed") */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex flex-col gap-3 max-w-2xl w-full">
            <div className="h-4 w-44 rounded bg-sky-400/20 animate-pulse" />
            <div className="h-8 w-72 max-w-full rounded-lg bg-white/15 animate-pulse" />
            <div className="h-4 w-full max-w-lg rounded bg-white/5 animate-pulse" />
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-28 rounded-lg bg-white/10 animate-pulse" />
              <div className="h-6 w-36 rounded-lg bg-white/10 animate-pulse" />
              <div className="h-6 w-24 rounded-lg bg-white/10 animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-36 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
            <div className="h-10 w-48 rounded-xl bg-sky-400/30 border border-sky-400/40 animate-pulse" />
          </div>
        </div>

        {/* Recent Deeds Ledger Table Skeleton */}
        <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="h-6 w-44 rounded bg-white/15 animate-pulse" />
                <div className="h-5 w-16 rounded-full bg-emerald-500/20 animate-pulse" />
              </div>
              <div className="h-3.5 w-72 max-w-full rounded bg-white/5 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="h-9 w-44 rounded-xl bg-white/10 animate-pulse" />
              <div className="h-9 w-52 rounded-xl bg-white/5 animate-pulse hidden md:block" />
            </div>
          </div>

          {/* Table Header and Rows */}
          <div className="p-4 overflow-x-auto">
            <div className="min-w-[900px] space-y-3">
              <div className="h-10 w-full rounded-xl bg-slate-950/80 border border-white/10 flex items-center px-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
                ))}
              </div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-14 w-full rounded-xl bg-white/[0.03] border border-white/5 flex items-center px-4 gap-4"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((j) => (
                    <div key={j} className="h-4 flex-1 bg-white/5 rounded animate-pulse" />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Table Footer */}
          <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="h-4 w-64 rounded bg-white/10 animate-pulse" />
            <div className="flex items-center gap-3">
              <div className="h-8 w-44 rounded-xl bg-white/10 animate-pulse" />
              <div className="h-8 w-28 rounded-xl bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubRegistrarDashboardLoading;
