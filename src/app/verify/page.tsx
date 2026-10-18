import { Metadata } from "next";
import { VerifyPortalHeader } from "@/app/_components/verify/VerifyPortalHeader";
import { CadastralSearchForm } from "@/app/_components/verify/CadastralSearchForm";
import { QrScannerCard } from "@/app/_components/verify/QrScannerCard";
import { SecurityAttributesGrid } from "@/app/_components/verify/SecurityAttributesGrid";
import { LiveLedgerPreviewBar } from "@/app/_components/verify/LiveLedgerPreviewBar";

export const metadata: Metadata = {
  title: "Verify Land Record & Encumbrance | BhumiSync Sovereign Land Registry",
  description:
    "Query live biometric cadastral ledger records across sub-registry and revenue offices. Instant decentralized node lookup and SHA-256 deed QR scanning.",
};

const VerifyPage = () => {
  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7 flex-grow">
      {/* 1. Portal Header Section */}
      <VerifyPortalHeader />

      {/* 2. Main 12-Column Grid: Search Cadastral Record (8 cols) & Scan Deed QR (4 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <CadastralSearchForm />
        <QrScannerCard />
      </section>

      {/* 3. Three Security / Verification Attribute Cards */}
      <SecurityAttributesGrid />

      {/* 4. Live Ledger Inspection Preview Bar */}
      <LiveLedgerPreviewBar />
    </main>
  );
};

export default VerifyPage;
