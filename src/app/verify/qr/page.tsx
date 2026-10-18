import { Metadata } from "next";
import { QrBreadcrumbHeader } from "@/app/_components/verify-qr/QrBreadcrumbHeader";
import { QrVerdictCard } from "@/app/_components/verify-qr/QrVerdictCard";
import { SealTimeline } from "@/app/_components/verify-qr/SealTimeline";
import { PartiesEncumbrance } from "@/app/_components/verify-qr/PartiesEncumbrance";
import { FraudDiagnosticCard } from "@/app/_components/verify-qr/FraudDiagnosticCard";
import { QrActionCta } from "@/app/_components/verify-qr/QrActionCta";

export const metadata: Metadata = {
  title: "QR Deed Verification | BhumiSync Sovereign Land Registry",
  description:
    "Cryptographic QR code deed verification and immutable ledger audit across Savar Sub-Registry and Savar AC Land Office.",
};

const QrVerificationPage = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 space-y-6 min-h-[calc(100vh-8rem)]">
      {/* 1. Header / Breadcrumb Strata */}
      <QrBreadcrumbHeader />

      {/* 2. Primary Hero Glass Card: Verification Verdict */}
      <QrVerdictCard />

      {/* 3. Balanced 2-Column Split: Timeline & Parties */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 flex flex-col">
          <SealTimeline />
        </div>
        <div className="lg:col-span-5 flex flex-col">
          <PartiesEncumbrance />
        </div>
      </div>

      {/* 4. Alternate Tamper / Counterfeit Diagnostic Simulation */}
      <FraudDiagnosticCard />

      {/* 5. Action CTAs */}
      <QrActionCta />
    </div>
  );
};

export default QrVerificationPage;
