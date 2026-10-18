export const Loading = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-6 animate-pulse min-h-[calc(100vh-8rem)]">
      {/* 1. Breadcrumb Strata Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
        <div className="h-4 w-72 rounded bg-white/[0.08]" />
        <div className="h-6 w-52 rounded-full bg-white/[0.06]" />
      </div>

      {/* 2. Hero Verdict Glass Card Skeleton */}
      <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.04] border border-white/[0.12] space-y-6">
        <div className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-white/10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.08] shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-7 w-64 rounded-xl bg-white/[0.10]" />
            <div className="h-4 w-3/4 max-w-lg rounded-lg bg-white/[0.06]" />
          </div>
        </div>

        {/* 5-Column Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-20 rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5 space-y-2"
            >
              <div className="h-3 w-20 rounded bg-white/[0.06]" />
              <div className="h-4 w-28 rounded bg-white/[0.08]" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Balanced 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column Timeline (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.10] space-y-6 h-96" />

        {/* Right Column Parties (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.10] space-y-6 h-96" />
      </div>

      {/* 4. Diagnostic Card Skeleton */}
      <div className="h-28 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between" />

      {/* 5. CTA Buttons Skeleton */}
      <div className="flex justify-center gap-4 py-4">
        <div className="h-12 w-64 rounded-xl bg-white/[0.10]" />
        <div className="h-12 w-48 rounded-xl bg-white/[0.06]" />
      </div>
    </div>
  );
};

export default Loading;
