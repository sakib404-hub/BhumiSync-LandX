import { Metadata } from "next";
import { PlotDossierHeader } from "@/app/_components/verify-plot/PlotDossierHeader";
import { OwnershipShareCard } from "@/app/_components/verify-plot/OwnershipShareCard";
import { RiskAssessmentCard } from "@/app/_components/verify-plot/RiskAssessmentCard";
import { EncumbranceSideCards } from "@/app/_components/verify-plot/EncumbranceSideCards";

interface PlotPageProps {
  params: Promise<{
    plotId: string;
  }>;
}

export const generateStaticParams = () => {
  return [{ plotId: "452-1" }];
};

export const metadata: Metadata = {
  title: "Cadastral Plot Dossier: SYN-Savar / Daag 452/1 | BhumiSync Sovereign Land Registry",
  description:
    "Live biometric parcel ledger records, real-time transaction escrow lock, and multi-departmental encumbrance audit for Mouza SYN-Savar Daag 452/1.",
};

const PlotDossierPage = async ({ params }: PlotPageProps) => {
  const { plotId } = await params;

  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 flex-grow">
      {/* 1. Page Header / Plot Dossier Banner */}
      <PlotDossierHeader plotId={plotId} />

      {/* 2. Main 2-Column Analytical Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Ownership Shares & Escrow Lock + Risk Level Assessment (8 cols) */}
        <section className="lg:col-span-8 space-y-6">
          <OwnershipShareCard />
          <RiskAssessmentCard />
        </section>

        {/* Right Column: 4 Stacked Mini Encumbrance Glass Cards + Micro-Banner (4 cols) */}
        <EncumbranceSideCards />
      </div>
    </main>
  );
};

export default PlotDossierPage;
