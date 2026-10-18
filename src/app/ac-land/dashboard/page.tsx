import { Metadata } from "next";
import { MutationQueueConsole } from "@/app/_components/ac-land/queue/MutationQueueConsole";

export const metadata: Metadata = {
  title: "AC Land Mutation Court Dashboard | BhumiSync Sovereign Cadastre",
  description:
    "Institutional dashboard for Assistant Commissioner (Land). Real-time cadastral mutation cases, Kanungo audits, hearings, and statutory SLA compliance.",
};

export const AcLandDashboardPage = () => {
  return <MutationQueueConsole />;
};

export default AcLandDashboardPage;
