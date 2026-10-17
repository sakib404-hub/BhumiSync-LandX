import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-xl border border-white/15 bg-[#0a1526]/60 px-3 py-1.5 text-sm text-white placeholder:text-slate-400 backdrop-blur-md transition-all outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white focus-visible:border-[#38bdf8] focus-visible:ring-2 focus-visible:ring-[#38bdf8]/30 focus-visible:shadow-[0_0_14px_rgba(56,189,248,0.35)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
