export const RegisterDeedLoading = () => {
  return (
    <div className="relative min-h-screen bg-[#081324] text-slate-100 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="fixed top-[-100px] left-[15%] w-[550px] h-[550px] rounded-full bg-sky-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[5%] w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10" />

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
                  i === 3
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
        {/* Horizontal Stepper Audit Trail Skeleton */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  i === 2
                    ? "bg-sky-500/15 border-sky-400/40 shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                    : i === 1
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-white/[0.03] border-white/10"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 animate-pulse ${
                    i === 2
                      ? "bg-sky-400/40 text-sky-200"
                      : i === 1
                      ? "bg-emerald-400/40 text-emerald-200"
                      : "bg-white/10"
                  }`}
                />
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-4 w-3/4 rounded bg-white/15 animate-pulse" />
                  <div className="h-3 w-1/2 rounded bg-white/5 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (7 cols): Deed Execution Form Skeleton */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex flex-col gap-1.5">
                <div className="h-6 w-64 rounded-lg bg-white/15 animate-pulse" />
                <div className="h-3.5 w-80 max-w-full rounded bg-white/5 animate-pulse" />
              </div>
              <div className="h-7 w-28 rounded-full bg-sky-500/20 border border-sky-400/30 animate-pulse" />
            </div>

            {/* Parcel Identification Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <div className="h-3.5 w-44 rounded bg-white/15 animate-pulse" />
                <div className="h-5 w-28 rounded-full bg-emerald-500/20 animate-pulse" />
              </div>
              <div className="h-5 w-72 rounded bg-white/10 animate-pulse" />
              <div className="h-3 w-52 rounded bg-white/5 animate-pulse" />
            </div>

            {/* Seller Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <div className="h-3.5 w-44 rounded bg-white/15 animate-pulse" />
                <div className="h-5 w-28 rounded-full bg-emerald-500/20 animate-pulse" />
              </div>
              <div className="h-5 w-56 rounded bg-white/10 animate-pulse" />
              <div className="h-3 w-48 rounded bg-white/5 animate-pulse" />
            </div>

            {/* Buyer Selector Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="h-3.5 w-44 rounded bg-white/15 animate-pulse" />
                <div className="h-6 w-24 rounded-lg bg-sky-500/20 animate-pulse" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="h-16 rounded-xl bg-sky-500/15 border border-sky-400/40 animate-pulse" />
                <div className="h-16 rounded-xl bg-white/[0.03] border border-white/10 animate-pulse" />
              </div>
            </div>

            {/* Share & Deed Number Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-16 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
              <div className="h-16 rounded-xl bg-slate-950/60 border border-white/10 animate-pulse" />
            </div>

            {/* Amber Warning Box */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
              <div className="w-4 h-4 rounded bg-amber-400/40 animate-pulse shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5 w-full">
                <div className="h-3.5 w-40 rounded bg-amber-400/40 animate-pulse" />
                <div className="h-3 w-full rounded bg-amber-400/20 animate-pulse" />
              </div>
            </div>

            {/* Checkbox line */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-4 h-4 rounded bg-white/20 animate-pulse shrink-0" />
              <div className="h-3 w-72 max-w-full rounded bg-white/10 animate-pulse" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-11 flex-1 min-w-[180px] rounded-xl bg-sky-400/30 border border-sky-400/40 animate-pulse" />
              <div className="h-11 w-32 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
            </div>
          </div>

          {/* Right Column (5 cols): Sealed Escrow Voucher Skeleton */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/30 animate-pulse shrink-0" />
              <div className="flex flex-col gap-2 w-full">
                <div className="h-5 w-48 rounded bg-white/15 animate-pulse" />
                <div className="h-3.5 w-full rounded bg-white/5 animate-pulse" />
              </div>
            </div>

            {/* Proportional Conveyance Bar */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col gap-2.5">
              <div className="h-3.5 w-44 rounded bg-white/15 animate-pulse" />
              <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden flex">
                <div className="w-1/2 h-full bg-amber-400/40 animate-pulse" />
                <div className="w-1/2 h-full bg-sky-400/40 animate-pulse" />
              </div>
              <div className="flex justify-between items-center pt-1">
                <div className="h-3 w-28 rounded bg-white/10 animate-pulse" />
                <div className="h-3 w-28 rounded bg-white/10 animate-pulse" />
              </div>
            </div>

            {/* QR Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col items-center gap-3 text-center">
              <div className="w-28 h-28 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
              <div className="h-3.5 w-36 rounded bg-white/10 animate-pulse" />
              <div className="h-3 w-48 rounded bg-white/5 animate-pulse" />
            </div>

            {/* AC Land Relay Card */}
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex flex-col gap-2">
              <div className="h-3.5 w-52 rounded bg-indigo-300/40 animate-pulse" />
              <div className="h-3 w-36 rounded bg-indigo-300/20 animate-pulse" />
            </div>

            {/* Export Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="h-10 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
              <div className="h-10 rounded-xl bg-white/10 border border-white/15 animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterDeedLoading;
