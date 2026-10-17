import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap backdrop-blur-md transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-sky-500/15 border-sky-400/35 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)] [a]:hover:bg-sky-500/25",
        secondary:
          "bg-white/[0.08] border-white/20 text-slate-200 [a]:hover:bg-white/[0.15]",
        destructive:
          "bg-rose-500/15 border-rose-500/35 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.15)] [a]:hover:bg-rose-500/25",
        outline:
          "border-white/20 text-slate-300 [a]:hover:bg-white/[0.08] [a]:hover:text-white",
        ghost:
          "border-transparent hover:bg-white/[0.08] text-slate-300 hover:text-white",
        link: "text-sky-400 underline-offset-4 hover:underline border-transparent",
        /* Luminous Registry Glass Status Variants */
        verified:
          "bg-emerald-500/12 border-emerald-500/35 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
        pending:
          "bg-sky-500/12 border-sky-400/35 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
        caution:
          "bg-amber-500/12 border-amber-500/35 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
        frozen:
          "bg-rose-500/12 border-rose-500/35 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.15)]",
        glass:
          "bg-white/[0.08] border-white/20 text-slate-200 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
