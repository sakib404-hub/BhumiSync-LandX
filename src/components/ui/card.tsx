import * as React from "react"
import { cn } from "cn"

interface CardProps extends React.ComponentProps<"div"> {
  size?: "default" | "sm"
  level?: 1 | 2
  interactive?: boolean
}

const Card = ({
  className,
  size = "default",
  level = 1,
  interactive = false,
  ...props
}: CardProps) => {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-2xl py-(--card-spacing) text-sm text-slate-100 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-2xl *:[img:last-child]:rounded-b-2xl transition-all duration-300",
        // Refined, subtle optical glass border and gentle specular highlight
        level === 1 &&
          "bg-[#0a1526]/55 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.36),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
        level === 2 &&
          "bg-[#0f1d33]/65 backdrop-blur-2xl border border-white/[0.18] shadow-[0_12px_36px_0_rgba(0,0,0,0.45),0_0_12px_rgba(56,189,248,0.10),inset_0_1px_0_0_rgba(255,255,255,0.16)]",
        interactive &&
          "cursor-pointer hover:-translate-y-1 hover:border-white/[0.22] hover:shadow-[0_14px_40px_0_rgba(0,0,0,0.5),0_0_16px_rgba(56,189,248,0.14),inset_0_1px_0_0_rgba(255,255,255,0.20)]",
        className
      )}
      {...props}
    />
  )
}

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-2xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-lg leading-snug font-semibold text-white tracking-tight group-data-[size=sm]/card:text-sm flex items-center justify-between",
        className
      )}
      {...props}
    />
  )
}

const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-description"
      className={cn("text-xs text-slate-300/80 leading-relaxed", className)}
      {...props}
    />
  )
}

const CardAction = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-(--card-spacing)", className)}
      {...props}
    />
  )
}

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-2xl border-t border-white/10 bg-white/[0.02] p-(--card-spacing) text-xs text-slate-400 mt-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
