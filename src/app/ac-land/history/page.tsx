import { Metadata } from "next";
import { MutationHistoryConsole } from "@/app/_components/ac-land/history/MutationHistoryConsole";

export const metadata: Metadata = {
  title: "Mutation History & Ledger Archive | BhumiSync AC Land Court",
  description:
    "Historical mutation orders, Namzari approvals, and immutable ledger consensus proofs for Savar AC Land. Verified on sovereign Merkle consensus.",
};

const HistoryPage = () => {
  return <MutationHistoryConsole />;
};

export default HistoryPage;
