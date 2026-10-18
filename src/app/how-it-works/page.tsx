import { Metadata } from "next";
import { ArchitectureHeader } from "@/app/_components/how-it-works/ArchitectureHeader";
import { StateMachineStepper } from "@/app/_components/how-it-works/StateMachineStepper";
import { MismatchCheckerCard } from "@/app/_components/how-it-works/MismatchCheckerCard";
import { DoubleSaleCard } from "@/app/_components/how-it-works/DoubleSaleCard";
import { TamperProofSealsCard } from "@/app/_components/how-it-works/TamperProofSealsCard";
import { SyncBanner } from "@/app/_components/how-it-works/SyncBanner";

export const metadata: Metadata = {
  title: "How It Works | BhumiSync Sovereign Land Registry",
  description:
    "Every cadastral deed undergoes an immutable six-phase verification from pre-check to cryptographic ledger seal.",
};

const HowItWorksPage = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 min-h-[calc(100vh-8rem)]">
      {/* 1. Hero Architecture Header & Institutional Metadata Strip */}
      <ArchitectureHeader />

      {/* 2. Horizontal 6-Step Cadastral State Machine Sequence */}
      <StateMachineStepper />

      {/* 3. Three Deep Security Architecture Cards Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <MismatchCheckerCard />
        <DoubleSaleCard />
        <TamperProofSealsCard />
      </section>

      {/* 4. Inter-Departmental Ledger Sync Callout Banner */}
      <SyncBanner />
    </div>
  );
};

export default HowItWorksPage;
