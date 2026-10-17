const HomeLoading = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-24 space-y-24 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="flex flex-col items-center text-center space-y-8 pt-4">
        <div className="max-w-3xl space-y-4 flex flex-col items-center">
          {/* Badge placeholder */}
          <div className="h-6 w-44 rounded-full bg-white/10" />
          {/* Headline placeholder */}
          <div className="h-12 w-3/4 max-w-2xl rounded-2xl bg-white/15" />
          {/* Subline placeholder */}
          <div className="h-5 w-2/3 max-w-xl rounded-lg bg-white/10" />
        </div>

        {/* Cadastral Search Glass Card Skeleton */}
        <div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-8 space-y-6 backdrop-blur-md">
          {/* 4-column input skeletons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 rounded bg-white/10" />
                <div className="h-10 w-full rounded-xl bg-white/10" />
              </div>
            ))}
          </div>

          {/* Bottom control row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="h-7 w-72 rounded-full bg-white/10" />
            <div className="flex gap-3 w-full sm:w-auto">
              <div className="h-10 w-28 rounded-xl bg-white/10" />
              <div className="h-10 w-32 rounded-xl bg-white/15" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Parcel Ledger Record Peek Skeleton */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-6 w-52 rounded-lg bg-white/15" />
          <div className="h-6 w-36 rounded-full bg-white/10" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-20 rounded bg-white/10" />
                <div className="h-5 w-full rounded bg-white/15" />
                <div className="h-3 w-16 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Row Skeleton */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 space-y-4 backdrop-blur-md"
          >
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 rounded-xl bg-white/10" />
              <div className="h-5 w-24 rounded-full bg-white/10" />
            </div>
            <div className="space-y-1">
              <div className="h-8 w-28 rounded-lg bg-white/15" />
              <div className="h-4 w-36 rounded bg-white/10" />
              <div className="h-3 w-44 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </section>

      {/* How It Works Section Skeleton */}
      <section className="space-y-10">
        <div className="text-center space-y-2 flex flex-col items-center">
          <div className="h-4 w-20 rounded bg-white/10" />
          <div className="h-8 w-44 rounded-xl bg-white/15" />
          <div className="h-4 w-72 rounded bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 space-y-4 backdrop-blur-md"
            >
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 rounded-xl bg-white/10" />
                <div className="h-5 w-16 rounded-full bg-white/10" />
              </div>
              <div className="space-y-1">
                <div className="h-3 w-16 rounded bg-white/10" />
                <div className="h-6 w-36 rounded-lg bg-white/15" />
              </div>
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-1.5 w-full rounded-full bg-white/10 mt-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Value Grid Skeleton */}
      <section className="space-y-8">
        <div className="text-center space-y-2 flex flex-col items-center">
          <div className="h-7 w-64 rounded-xl bg-white/15" />
          <div className="h-4 w-80 rounded bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 space-y-4 backdrop-blur-md"
            >
              <div className="h-11 w-11 rounded-xl bg-white/10" />
              <div className="h-6 w-28 rounded-lg bg-white/15" />
              <div className="h-12 w-full rounded bg-white/10" />
              <div className="h-4 w-24 rounded bg-white/10 pt-2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeLoading;
