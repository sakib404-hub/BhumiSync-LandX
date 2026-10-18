export const SubRegistrarDashboardLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* 1. Desktop Fixed Sidebar Skeleton (w-[260px]) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/90 border-r border-white/10 p-4 flex-col justify-between animate-pulse">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2 pt-1">
            <div className="w-10 h-10 rounded-xl bg-white/10" />
            <div className="flex flex-col gap-1.5">
              <div className="h-4 w-28 rounded bg-white/10" />
              <div className="h-3 w-20 rounded bg-white/5" />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-full rounded-xl bg-white/[0.04]" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
          <div className="h-12 w-full rounded-xl bg-white/[0.04]" />
          <div className="h-10 w-full rounded-xl bg-white/[0.04]" />
          <div className="h-9 w-full rounded-xl bg-white/[0.04]" />
        </div>
      </aside>

      {/* 2. Top Navigation Skeleton */}
      <header className="sticky top-0 right-0 z-30 h-16 w-full lg:ml-[260px] lg:max-w-[calc(100%-260px)] bg-slate-950/75 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between animate-pulse">
        <div className="flex items-center gap-3">
          <div className="h-5 w-48 rounded bg-white/10" />
          <div className="hidden sm:block h-5 w-64 rounded-full bg-white/5" />
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:block h-8 w-44 rounded-full bg-white/10" />
          <div className="h-8 w-28 rounded-xl bg-sky-400/20" />
          <div className="h-8 w-8 rounded-xl bg-white/5" />
        </div>
      </header>

      {/* 3. Main Workspace Skeleton */}
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 animate-pulse">
        {/* Header Ribbon Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <div className="h-3.5 w-40 rounded bg-sky-400/20" />
            <div className="h-8 w-64 rounded-lg bg-white/10" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-48 rounded-xl bg-white/10" />
            <div className="h-8 w-32 rounded-xl bg-emerald-400/20" />
          </div>
        </div>

        {/* 4 Bento Metric Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between h-36"
            >
              <div className="flex items-start justify-between">
                <div className="h-3 w-24 rounded bg-white/10" />
                <div className="w-8 h-8 rounded-xl bg-white/10" />
              </div>
              <div className="h-8 w-28 rounded-lg bg-white/10" />
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <div className="h-3 w-28 rounded bg-white/5" />
                <div className="h-4 w-16 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Hero Card Skeleton */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="h-4 w-40 rounded bg-sky-400/20" />
            <div className="h-8 w-72 rounded-lg bg-white/10" />
            <div className="h-4 w-96 max-w-full rounded bg-white/5" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-28 rounded-lg bg-white/10" />
              <div className="h-6 w-32 rounded-lg bg-white/10" />
              <div className="h-6 w-24 rounded-lg bg-white/10" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-36 rounded-xl bg-white/10" />
            <div className="h-10 w-44 rounded-xl bg-sky-400/20" />
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="h-5 w-48 rounded bg-white/10" />
              <div className="h-3 w-72 rounded bg-white/5" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-44 rounded-xl bg-white/10" />
              <div className="h-8 w-56 rounded-xl bg-white/5" />
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-full rounded-xl bg-white/[0.02]" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubRegistrarDashboardLoading;
