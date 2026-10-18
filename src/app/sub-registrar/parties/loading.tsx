export const PartiesDirectoryLoading = () => {
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
                  i === 5
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
      <main className="lg:ml-[260px] lg:max-w-[calc(100%-260px)] min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-48 rounded bg-sky-500/15 border border-sky-400/30 animate-pulse" />
              <div className="h-4 w-28 rounded bg-white/5 animate-pulse" />
            </div>
            <div className="h-8 w-80 max-w-full rounded-lg bg-white/15 animate-pulse" />
            <div className="h-4 w-96 max-w-full rounded bg-white/5 animate-pulse" />
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-36 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
            <div className="h-9 w-44 rounded-xl bg-sky-400/30 border border-sky-400/40 animate-pulse" />
          </div>
        </div>

        {/* 4-Bento Metrics Ribbon Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 flex flex-col justify-between h-28"
            >
              <div className="flex justify-between items-center">
                <div className="h-3 w-28 rounded bg-white/10 animate-pulse" />
                <div className="h-7 w-7 rounded-lg bg-white/10 animate-pulse" />
              </div>
              <div className="h-7 w-24 rounded bg-white/20 animate-pulse my-1" />
              <div className="h-4 w-28 rounded-full bg-white/5 animate-pulse" />
            </div>
          ))}
        </div>

        {/* 2-Column Asymmetric Workspace Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (5 cols): Add / Verify New Party Form Skeleton */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex flex-col gap-1.5">
                  <div className="h-6 w-48 rounded bg-white/15 animate-pulse" />
                  <div className="h-3.5 w-60 rounded bg-white/5 animate-pulse" />
                </div>
                <div className="h-5 w-16 rounded-full bg-white/10 animate-pulse" />
              </div>

              {/* Legal Name */}
              <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

              {/* NID Field */}
              <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

              {/* Amber Duplicate Warning Box */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
                <div className="w-4 h-4 rounded bg-amber-400/40 animate-pulse shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-3.5 w-32 rounded bg-amber-400/40 animate-pulse" />
                  <div className="h-3 w-full rounded bg-amber-400/20 animate-pulse" />
                </div>
              </div>

              {/* Phone Field */}
              <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

              {/* 4 Role Radio Cards */}
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-11 rounded-xl border animate-pulse ${
                      i === 1
                        ? "bg-sky-500/15 border-sky-400/30"
                        : "bg-white/[0.03] border-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* Sensor Card */}
              <div className="h-14 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />

              {/* Buttons */}
              <div className="h-11 w-full rounded-xl bg-sky-400/30 border border-sky-400/40 animate-pulse mt-2" />
              <div className="h-9 w-full rounded-xl bg-white/5 animate-pulse" />
            </div>

            {/* Invariant Lock Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 animate-pulse" />
                <div className="flex flex-col gap-1">
                  <div className="h-3.5 w-44 rounded bg-white/15 animate-pulse" />
                  <div className="h-2.5 w-36 rounded bg-white/5 animate-pulse" />
                </div>
              </div>
              <div className="h-5 w-14 rounded-full bg-emerald-500/20 animate-pulse" />
            </div>
          </div>

          {/* Right Column (7 cols): Recent Enrolled Parties Ledger Table Skeleton */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-1.5">
                <div className="h-6 w-52 rounded bg-white/15 animate-pulse" />
                <div className="h-3.5 w-64 rounded bg-white/5 animate-pulse" />
              </div>
              <div className="h-6 w-28 rounded-full bg-sky-400/20 border border-sky-400/30 animate-pulse" />
            </div>

            {/* Search and filter pills */}
            <div className="space-y-3 py-1">
              <div className="h-10 w-full rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
              <div className="flex gap-2 overflow-x-auto pb-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-7 w-24 rounded-full animate-pulse ${
                      i === 1
                        ? "bg-sky-400/30 border border-sky-400/40"
                        : "bg-white/5 border border-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Table Rows */}
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="h-10 bg-slate-950/80 border-b border-white/10 flex items-center px-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-3.5 flex-1 bg-white/10 rounded animate-pulse" />
                ))}
              </div>
              <div className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-14 flex items-center px-3 gap-3 ${
                      i === 4
                        ? "bg-amber-500/[0.04]"
                        : i === 5
                        ? "bg-rose-500/[0.04]"
                        : "bg-white/[0.02]"
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6].map((j) => (
                      <div key={j} className="h-4 flex-1 bg-white/5 rounded animate-pulse" />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Table Footer */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="h-4 w-36 rounded bg-white/5 animate-pulse" />
              <div className="h-8 w-44 rounded-lg bg-white/5 animate-pulse" />
              <div className="h-8 w-36 rounded-xl bg-white/10 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Regulatory Note Skeleton */}
        <div className="h-16 w-full rounded-2xl bg-slate-950/60 border border-white/10 animate-pulse" />
        <div className="h-6 w-full rounded bg-white/[0.02] animate-pulse" />
      </main>
    </div>
  );
};

export default PartiesDirectoryLoading;
