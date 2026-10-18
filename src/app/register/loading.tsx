export const RegisterLoading = () => {
  return (
    <div className="relative z-10 flex-1 flex items-center justify-center py-12 px-6 max-w-5xl mx-auto w-full min-h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch animate-pulse">
        {/* Left Security Panel Skeleton (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl p-7 lg:p-8 bg-white/[0.04] border border-white/[0.14] flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Badge */}
            <div className="h-6 w-36 rounded-full bg-white/[0.08]" />

            {/* Title & Desc */}
            <div className="space-y-3">
              <div className="h-8 w-4/5 rounded-xl bg-white/[0.10]" />
              <div className="h-4 w-full rounded-lg bg-white/[0.06]" />
              <div className="h-4 w-3/4 rounded-lg bg-white/[0.06]" />
            </div>

            {/* 3 Feature cards */}
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="h-9 w-9 rounded-xl bg-white/[0.08] shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3.5 w-1/2 rounded bg-white/[0.08]" />
                    <div className="h-3 w-4/5 rounded bg-white/[0.05]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom status chip */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="h-4 w-44 rounded bg-white/[0.07]" />
            <div className="h-4 w-16 rounded bg-white/[0.07]" />
          </div>
        </div>

        {/* Right Auth Card Skeleton (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl p-7 lg:p-8 bg-white/[0.04] border border-white/[0.14] flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* Tab switch skeleton */}
            <div className="h-12 w-full rounded-2xl bg-white/[0.06]" />

            {/* Register form inputs skeleton */}
            <div className="space-y-3.5 pt-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-10 rounded-xl bg-white/[0.06]" />
                <div className="h-10 rounded-xl bg-white/[0.06]" />
              </div>
              <div className="h-10 rounded-xl bg-white/[0.06]" />
              <div className="h-10 rounded-xl bg-white/[0.06]" />
              <div className="h-10 rounded-xl bg-white/[0.06]" />

              {/* Button skeleton */}
              <div className="h-12 w-full rounded-xl bg-sky-400/20 mt-2" />
            </div>
          </div>

          {/* Bottom staff info box */}
          <div className="h-12 w-full rounded-2xl bg-white/[0.04] border border-white/[0.05]" />
        </div>
      </div>
    </div>
  );
};

export default RegisterLoading;
