import { Metadata } from "next";
import { MutationCaseConsole } from "@/app/_components/ac-land/case/MutationCaseConsole";

interface MutationCasePageProps {
  params: Promise<{
    caseId: string;
  }>;
}

export const generateStaticParams = () => {
  return [{ caseId: "MUT-2026-000001" }];
};

export const metadata: Metadata = {
  title: "Mutation Case MUT-2026-000001 | BhumiSync AC Land Court",
  description:
    "Official AC Land Mutation Court Case Adjudication Console. Cadastral share math, Kanungo field report clearance, and cryptographic Namzari approval order.",
};

const MutationCasePage = async ({ params }: MutationCasePageProps) => {
  const { caseId } = await params;

  return <MutationCaseConsole caseId={caseId} />;
};

export default MutationCasePage;
