import { Metadata } from "next";
import { AcLandShell } from "@/app/_components/ac-land/AcLandShell";

export const metadata: Metadata = {
  title: "AC Land Mutation Court | BhumiSync Sovereign Cadastre",
  description:
    "Institutional Cadastral Mutation Court Portal for Assistant Commissioner (Land). Real-time queue, dispute hearings calendar, and immutable ledger archive.",
};

const AcLandLayout = ({ children }: { children: React.ReactNode }) => {
  return <AcLandShell>{children}</AcLandShell>;
};

export default AcLandLayout;
