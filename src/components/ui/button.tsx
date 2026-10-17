import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#38bdf8] text-[#081324] font-semibold shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:bg-[#7bd0ff] hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(56,189,248,0.65)]",
        secondary:
          "bg-white/[0.12] border-white/[0.22] text-white backdrop-blur-md hover:bg-white/[0.20] hover:border-white/[0.32]",
        outline:
          "border-white/20 bg-transparent text-slate-200 hover:bg-white/[0.08] hover:text-white hover:border-white/30",
        ghost:
          "border-transparent hover:bg-white/[0.08] text-slate-300 hover:text-white",
        destructive:
          "bg-rose-500/15 border-rose-500/40 text-rose-300 backdrop-blur-md hover:bg-rose-500/25 hover:border-rose-400 hover:shadow-[0_0_16px_rgba(239,68,68,0.40)]",
        link: "text-sky-400 underline-offset-4 hover:underline border-transparent",
        cta:
          "bg-[#38bdf8] text-[#081324] font-semibold shadow-[0_0_22px_rgba(56,189,248,0.50)] hover:bg-[#7bd0ff] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(56,189,248,0.75)]",
      },
      size: {
        default: "h-9 gap-2 px-4 text-sm",
        sm: "h-7.5 gap-1.5 rounded-lg px-2.5 text-xs",
        lg: "h-11 gap-2.5 rounded-xl px-6 text-base",
        icon: "size-9 p-0 rounded-xl justify-center",
        "icon-sm": "size-7.5 p-0 rounded-lg justify-center",
        "icon-lg": "size-11 p-0 rounded-xl justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
