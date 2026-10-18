import { Metadata } from "next";
import { CitizenProfileHeader } from "@/app/_components/citizen-land/CitizenProfileHeader";
import { BentoStatsRibbon } from "@/app/_components/citizen-land/BentoStatsRibbon";
import { HoldingDossierCard } from "@/app/_components/citizen-land/HoldingDossierCard";
import { PendingMutationStepper } from "@/app/_components/citizen-land/PendingMutationStepper";
import { CheckAnotherPlotCard } from "@/app/_components/citizen-land/CheckAnotherPlotCard";

export const metadata: Metadata = {
  title: "My Land (Citizen Portal) | BhumiSync Sovereign Land Registry",
  description:
    "Biometric deed ledger and sovereign cadastral holdings registered under SYN-NID-A10021. Real-time escrow lock and mutation tracking.",
};

export const CitizenLandPage = () => {
  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-grow">
      {/* 1. Page Header & Verified Identity Ribbon */}
      <CitizenProfileHeader />

      {/* 2. Bento Stats Ribbon (4 metric cards) */}
      <BentoStatsRibbon />

      {/* 3. Main Analytical Grid: 8 cols Holding Dossier, 4 cols Pending Mutation Stepper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <section className="lg:col-span-8">
          <HoldingDossierCard />
        </section>

        <section className="lg:col-span-4">
          <PendingMutationStepper />
        </section>
      </div>

      {/* 4. Check Another Plot Search Card */}
      <CheckAnotherPlotCard />
    </main>
  );
};

export default CitizenLandPage;
