import { Metadata } from "next";
import { AdminFraudConsole } from "@/app/_components/admin/fraud/AdminFraudConsole";

export const metadata: Metadata = {
  title: "Fraud Flags & Cadastral Risk Radar | BhumiSync Admin",
  description:
    "Institutional fraud flag management and cadastral anomaly detection for Assistant Commissioner and Sub-Registrar jurisdictions.",
};

const FraudPage = () => {
  return <AdminFraudConsole />;
};

export default FraudPage;
