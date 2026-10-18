import { Metadata } from "next";
import { AdminAuditConsole } from "@/app/_components/admin/audit/AdminAuditConsole";

export const metadata: Metadata = {
  title: "Cryptographic Audit Log Stream | BhumiSync Admin",
  description:
    "Statutory immutable audit log stream. Real-time verification of notarized deeds, sanctioned mutations, and ledger seal proofs.",
};

const AuditPage = () => {
  return <AdminAuditConsole />;
};

export default AuditPage;
