import { Metadata } from "next";
import { DeedsHeaderRibbon } from "@/app/_components/citizen-deeds/DeedsHeaderRibbon";
import { DeedsBentoStats } from "@/app/_components/citizen-deeds/DeedsBentoStats";
import { ActiveDeedDossierCard } from "@/app/_components/citizen-deeds/ActiveDeedDossierCard";
import { CitizenDeedRegistryTable } from "@/app/_components/citizen-deeds/CitizenDeedRegistryTable";

export const metadata: Metadata = {
  title: "My Deeds (Citizen Portal) | BhumiSync Sovereign Land Registry",
  description:
    "Biometrically executed land deeds, live AC Land mutation audit pipeline, and cadastral transfer records under citizen SYN-NID-A10021.",
};

export const CitizenDeedsPage = () => {
  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-grow">
      {/* 1. Header Ribbon & Portal Tabs */}
      <DeedsHeaderRibbon />

      {/* 2. Bento Stats Ribbon (4 metric cards) */}
      <DeedsBentoStats />

      {/* 3. Active Deed Dossier (Horizontal 4-Stage Stepper, 8-col Cadastral Breakdown & 4-col QR Card) */}
      <ActiveDeedDossierCard />

      {/* 4. Citizen Deed Registry Filterable Table */}
      <CitizenDeedRegistryTable />
    </main>
  );
};

export default CitizenDeedsPage;
