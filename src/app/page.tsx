import { Metadata } from "next";
import { HeroSection } from "@/app/_components/home/HeroSection";
import { ParcelLedgerPeek } from "@/app/_components/home/ParcelLedgerPeek";
import { KeyMetricsGrid } from "@/app/_components/home/KeyMetricsGrid";
import { WorkflowSection } from "@/app/_components/home/WorkflowSection";
import { EcosystemValueGrid } from "@/app/_components/home/EcosystemValueGrid";

export const metadata: Metadata = {
  title: "BhumiSync | Decentralized Land Registry & Cadastral Ledger",
  description:
    "Verify land before you buy. Instant cadastral deed verification, cryptographic ownership audit, and synchronized settlement across all 64 land offices.",
};

const Home = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 space-y-12 sm:space-y-16 lg:space-y-24 overflow-x-hidden">
      {/* 1. Hero Section with 4-Column Cadastral Search */}
      <HeroSection />

      {/* 2. Live Parcel Ledger Record Peek */}
      <ParcelLedgerPeek />

      {/* 3. Key System Metrics Row */}
      <KeyMetricsGrid />

      {/* 4. Three-Phase Cryptographic Workflow */}
      <WorkflowSection />

      {/* 5. Institutional Ecosystem Value Grid */}
      <EcosystemValueGrid />
    </div>
  );
};

export default Home;
