import { FileCheck, Lock, Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const WorkflowSection = () => {
  const steps = [
    {
      stepNumber: "Step 01",
      title: "Deed registered",
      description: "Deed no. SYN-D-0001 logged with biometric verification at Savar Sub-Registry.",
      badge: "Pass",
      badgeVariant: "verified" as const,
      icon: <FileCheck className="h-5 w-5 text-sky-400" />,
      barColor: "bg-sky-400",
    },
    {
      stepNumber: "Step 02",
      title: "Share locked",
      description: "Share 0.2500 (4 anna) locked in real-time ledger against unauthorized resale.",
      badge: "Secure",
      badgeVariant: "verified" as const,
      icon: <Lock className="h-5 w-5 text-sky-400" />,
      barColor: "bg-sky-400",
    },
    {
      stepNumber: "Step 03",
      title: "Mutation approved",
      description: "Case MUT-2026-000001 signed at Savar AC Land Office; new Khatian generated.",
      badge: "Approved",
      badgeVariant: "verified" as const,
      icon: <Landmark className="h-5 w-5 text-emerald-400" />,
      barColor: "bg-[#10b981]",
    },
  ];

  return (
    <section className="space-y-10" id="how-it-works">
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
          Workflow
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          How it works
        </h2>
        <p className="text-sm sm:text-base text-slate-300/80 max-w-xl mx-auto leading-relaxed">
          Every parcel transaction executes an immutable three-phase cryptographic settlement.
        </p>
      </div>

      {/* 3-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step) => (
          <Card
            key={step.stepNumber}
            level={1}
            interactive
            className="rounded-2xl p-6 space-y-4 relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                  {step.icon}
                </div>
                <Badge variant={step.badgeVariant}>{step.badge}</Badge>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                  {step.stepNumber}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-4">
              <div className={`h-full w-full ${step.barColor}`} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
