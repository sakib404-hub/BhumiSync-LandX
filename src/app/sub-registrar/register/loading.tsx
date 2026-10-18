export const RegisterDeedLoading = () => {
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
        {/* Horizontal Stepper Skeleton */}
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-2">
                <div className="w-9 h-9 rounded-full bg-white/10 shrink-0" />
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-4 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (7 cols) Form Skeleton */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-2">
                <div className="h-6 w-64 rounded-lg bg-white/10" />
                <div className="h-3.5 w-80 max-w-full rounded bg-white/5" />
              </div>
              <div className="h-7 w-28 rounded-full bg-white/10" />
            </div>

            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="h-3.5 w-36 rounded bg-white/10" />
                <div className="h-14 w-full rounded-xl bg-white/[0.03] border border-white/5" />
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-16 rounded-xl bg-white/[0.03] border border-white/5" />
              <div className="h-16 rounded-xl bg-white/[0.03] border border-white/5" />
            </div>

            <div className="h-20 rounded-xl bg-amber-500/10 border border-amber-500/20" />

            <div className="flex gap-3 pt-2">
              <div className="h-11 flex-1 rounded-xl bg-sky-400/20" />
              <div className="h-11 w-32 rounded-xl bg-white/10" />
              <div className="h-11 w-11 rounded-xl bg-white/10" />
            </div>
          </div>

          {/* Right Column (5 cols) Voucher Skeleton */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-500/20 shrink-0" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-5 w-48 rounded bg-white/10" />
                <div className="h-3.5 w-full rounded bg-white/5" />
              </div>
            </div>

            <div className="h-24 rounded-xl bg-white/[0.03] border border-white/5" />
            <div className="h-28 rounded-xl bg-white/[0.03] border border-white/5" />
            <div className="h-24 rounded-xl bg-indigo-500/10 border border-indigo-500/20" />

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="h-10 rounded-xl bg-white/10" />
              <div className="h-10 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterDeedLoading;
