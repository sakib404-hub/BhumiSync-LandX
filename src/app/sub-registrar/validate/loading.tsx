export const ValidateDeedLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* 1. Desktop Fixed Sidebar Skeleton */}
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
        {/* Top Alert Skeleton */}
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 shrink-0" />
            <div className="h-4 w-3/4 max-w-lg rounded bg-white/10" />
          </div>
          <div className="h-6 w-32 rounded-full bg-red-500/20 shrink-0" />
        </div>

        {/* 2-Column Responsive Workspace Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Form Skeleton */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="h-6 w-48 rounded bg-white/10" />
              <div className="h-6 w-24 rounded-full bg-white/10" />
            </div>

            <div className="h-14 w-full rounded-xl bg-white/[0.03]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-white/[0.03]" />
              <div className="h-14 rounded-xl bg-white/[0.03]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-white/[0.03]" />
              <div className="h-14 rounded-xl bg-white/[0.03]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-red-500/10 border border-red-500/20" />
              <div className="h-14 rounded-xl bg-white/[0.03]" />
            </div>
            <div className="h-14 w-full rounded-xl bg-white/[0.03]" />

            <div className="h-12 w-full rounded-xl bg-sky-400/20 mt-2" />
          </div>

          {/* Right Column (7 cols): Audit Reconciliation Skeleton */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-1.5">
                <div className="h-6 w-48 rounded bg-white/10" />
                <div className="h-3.5 w-36 rounded bg-white/5" />
              </div>
              <div className="h-7 w-44 rounded-full bg-white/10" />
            </div>

            {/* Verdict Banner Skeleton */}
            <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 rounded-lg bg-red-500/30 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-4 w-52 rounded bg-white/10" />
                  <div className="h-3.5 w-3/4 rounded bg-white/5" />
                </div>
              </div>
              <div className="h-7 w-32 rounded-full bg-red-500/30 shrink-0" />
            </div>

            {/* Table Skeleton */}
            <div className="rounded-xl border border-white/10 p-4 space-y-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-8 w-full rounded bg-white/[0.02]" />
              ))}
            </div>

            {/* Action Footer Skeleton */}
            <div className="pt-3 border-t border-white/10 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="h-9 w-40 rounded-xl bg-white/10" />
                <div className="h-9 w-36 rounded-xl bg-white/10" />
              </div>
              <div className="h-10 w-44 rounded-xl bg-white/5" />
            </div>
          </div>
        </div>

        {/* Bottom Stepper Pipeline Skeleton */}
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="h-5 w-60 rounded bg-white/10" />
            <div className="h-4 w-32 rounded bg-white/5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 rounded-xl bg-white/[0.03] border border-white/5" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ValidateDeedLoading;
