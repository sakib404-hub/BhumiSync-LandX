const HomeLoading = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 space-y-12 sm:space-y-16 lg:space-y-24 overflow-x-hidden animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="flex flex-col items-center text-center space-y-6 sm:space-y-8 pt-2 sm:pt-4 w-full">
        <div className="max-w-3xl space-y-3 sm:space-y-4 flex flex-col items-center w-full">
          {/* Badge placeholder */}
          <div className="h-6 w-44 rounded-full bg-white/10" />
          {/* Headline placeholder */}
          <div className="h-10 sm:h-14 w-3/4 max-w-2xl rounded-2xl bg-white/15" />
          {/* Subline placeholder */}
          <div className="h-4 sm:h-5 w-2/3 max-w-xl rounded-lg bg-white/10" />
        </div>

        {/* Cadastral Search Glass Card Skeleton */}
        <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 backdrop-blur-md">
          {/* 4-column input skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 rounded bg-white/10" />
                <div className="h-10 w-full rounded-xl bg-white/10" />
              </div>
            ))}
          </div>

          {/* Bottom control row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
            <div className="h-7 w-56 sm:w-72 rounded-full bg-white/10" />
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <div className="h-10 w-full sm:w-28 rounded-xl bg-white/10" />
              <div className="h-10 w-full sm:w-32 rounded-xl bg-white/15" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Parcel Ledger Record Peek Skeleton */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="h-6 w-52 rounded-lg bg-white/15" />
          <div className="h-6 w-36 rounded-full bg-white/10" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2 p-3 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="h-3 w-20 rounded bg-white/10" />
                <div className="h-5 w-full rounded bg-white/15" />
                <div className="h-3 w-16 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Row Skeleton */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-5 space-y-3.5 sm:space-y-4 backdrop-blur-md"
          >
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 rounded-xl bg-white/10" />
              <div className="h-5 w-24 rounded-full bg-white/10" />
            </div>
            <div className="space-y-1">
              <div className="h-7 sm:h-8 w-28 rounded-lg bg-white/15" />
              <div className="h-4 w-36 rounded bg-white/10" />
              <div className="h-3 w-44 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </section>

      {/* How It Works Section Skeleton */}
      <section className="space-y-6 sm:space-y-10">
        <div className="text-center space-y-2 flex flex-col items-center px-1">
          <div className="h-4 w-20 rounded bg-white/10" />
          <div className="h-7 sm:h-8 w-44 rounded-xl bg-white/15" />
          <div className="h-4 w-72 max-w-full rounded bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 space-y-3.5 sm:space-y-4 backdrop-blur-md"
            >
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 rounded-xl bg-white/10" />
                <div className="h-5 w-16 rounded-full bg-white/10" />
              </div>
              <div className="space-y-1">
                <div className="h-3 w-16 rounded bg-white/10" />
                <div className="h-5 sm:h-6 w-36 rounded-lg bg-white/15" />
              </div>
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-1.5 w-full rounded-full bg-white/10 mt-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Value Grid Skeleton */}
      <section className="space-y-6 sm:space-y-8 overflow-hidden w-full max-w-full">
        <div className="text-center space-y-2 flex flex-col items-center px-1">
          <div className="h-6 sm:h-7 w-64 rounded-xl bg-white/15" />
          <div className="h-4 w-80 max-w-full rounded bg-white/10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 space-y-3 sm:space-y-4 backdrop-blur-md"
            >
              <div className="h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-white/10" />
              <div className="h-5 sm:h-6 w-28 rounded-lg bg-white/15" />
              <div className="h-10 sm:h-12 w-full rounded bg-white/10" />
              <div className="h-4 w-24 rounded bg-white/10 pt-2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeLoading;
