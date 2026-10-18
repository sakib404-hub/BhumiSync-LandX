export const AdminOverviewLoading = () => {
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8 animate-pulse">
      {/* 1. Bento Stats Skeleton */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-5 bg-white/[0.04] border border-white/10 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 bg-white/10 rounded" />
              <div className="h-9 w-9 bg-white/10 rounded-xl" />
            </div>
            <div className="flex items-baseline gap-3">
              <div className="h-8 w-14 bg-white/15 rounded-lg" />
              <div className="h-5 w-20 bg-white/10 rounded-full" />
            </div>
            <div className="h-3.5 w-36 bg-white/10 rounded" />
          </div>
        ))}
      </section>

      {/* 2. Middle Two-Column Grid Skeleton */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column (7 cols): Audit Table Skeleton */}
        <div className="xl:col-span-7 rounded-2xl p-5 sm:p-6 bg-white/[0.04] border border-white/10 space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="space-y-2">
              <div className="h-5 w-44 bg-white/15 rounded" />
              <div className="h-3.5 w-64 bg-white/10 rounded" />
            </div>
            <div className="h-8 w-28 bg-white/10 rounded-xl" />
          </div>

          <div className="space-y-3 pt-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-white/5"
              >
                <div className="h-4 w-14 bg-white/10 rounded font-mono" />
                <div className="space-y-1">
                  <div className="h-3.5 w-20 bg-white/15 rounded" />
                  <div className="h-2.5 w-28 bg-white/10 rounded" />
                </div>
                <div className="space-y-1">
                  <div className="h-3.5 w-36 bg-white/15 rounded" />
                  <div className="h-2.5 w-48 bg-white/10 rounded" />
                </div>
                <div className="h-6 w-20 bg-white/10 rounded-full" />
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center">
            <div className="h-3.5 w-40 bg-white/10 rounded" />
            <div className="h-6 w-24 bg-white/10 rounded-lg" />
          </div>
        </div>

        {/* Right Column (5 cols): Fraud Flags & Outbox Skeleton */}
        <div className="xl:col-span-5 space-y-6">
          {/* Fraud Flags Skeleton */}
          <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.04] border border-white/10 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="space-y-1.5">
                <div className="h-5 w-36 bg-white/15 rounded" />
                <div className="h-3 w-48 bg-white/10 rounded" />
              </div>
              <div className="h-5 w-14 bg-rose-500/20 rounded-full" />
            </div>

            <div className="flex gap-2">
              {[1, 2, 3].map((f) => (
                <div key={f} className="h-6 w-16 bg-white/10 rounded-full" />
              ))}
            </div>

            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5"
                >
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-28 bg-white/10 rounded-full" />
                    <div className="h-3 w-20 bg-white/10 rounded" />
                  </div>
                  <div className="h-4 w-40 bg-white/15 rounded" />
                  <div className="h-3 w-full bg-white/10 rounded" />
                  <div className="flex gap-2 pt-1">
                    <div className="h-7 flex-1 bg-sky-500/20 rounded-lg" />
                    <div className="h-7 w-16 bg-white/10 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outbox Health Skeleton */}
          <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.04] border border-white/10 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div className="h-5 w-40 bg-white/15 rounded" />
              <div className="h-5 w-20 bg-emerald-500/20 rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1"
                >
                  <div className="h-2.5 w-14 bg-white/10 rounded mx-auto" />
                  <div className="h-5 w-12 bg-white/15 rounded mx-auto" />
                  <div className="h-2 w-16 bg-white/10 rounded mx-auto" />
                </div>
              ))}
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminOverviewLoading;
