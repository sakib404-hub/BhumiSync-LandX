export const SubRegistrarGatewayLoading = () => {
  return (
    <main className="relative min-h-screen bg-[#081324] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      <div className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-pulse">
        {/* Hero Header Skeleton */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Institutional Pill Badge */}
          <div className="h-7 w-64 rounded-full bg-white/10 mb-6" />

          {/* Title */}
          <div className="h-12 w-80 sm:w-96 rounded-xl bg-white/10 mb-4" />

          {/* Subtitle */}
          <div className="h-4 w-full max-w-lg rounded bg-white/5 mb-2" />
          <div className="h-4 w-3/4 max-w-md rounded bg-white/5 mb-6" />

          {/* Station Jurisdiction Card */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="h-9 w-64 rounded-xl bg-white/[0.04] border border-white/10" />
            <div className="h-9 w-36 rounded-xl bg-emerald-500/10 border border-emerald-500/20" />
          </div>

          {/* Primary CTA Button */}
          <div className="h-12 w-56 rounded-2xl bg-sky-500/20 border border-sky-400/30" />
        </div>

        {/* 4 Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between h-72"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white/10" />
                  <div className="h-5 w-24 rounded-full bg-white/10" />
                </div>
                <div className="h-6 w-36 rounded-lg bg-white/10 mt-2" />
                <div className="h-4 w-full rounded bg-white/5" />
                <div className="h-4 w-4/5 rounded bg-white/5" />
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-white/10" />
                <div className="w-4 h-4 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice Skeleton */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0" />
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 w-48 rounded bg-white/10" />
              <div className="h-3.5 w-3/4 rounded bg-white/5" />
            </div>
          </div>
          <div className="h-9 w-44 rounded-xl bg-white/10 shrink-0" />
        </div>
      </div>
    </main>
  );
};

export default SubRegistrarGatewayLoading;
