import { Metadata } from "next";
import { DeedDossierClient } from "@/app/_components/sub-registrar/deed/DeedDossierClient";

interface DeedPageProps {
  params: Promise<{
    deedId: string;
  }>;
}

export const generateStaticParams = () => {
  return [{ deedId: "SYN-D-0001" }];
};

export const metadata: Metadata = {
  title: "Deed Dossier: SYN-D-0001 | BhumiSync Sovereign Land Registry",
  description:
    "Official conveyance deed dossier, real-time AC Land mutation relay tracker, cryptographic seal chain, and parcel escrow audit record.",
};

const DeedDossierPage = async ({ params }: DeedPageProps) => {
  const { deedId } = await params;

  return <DeedDossierClient deedId={deedId} />;
};

export default DeedDossierPage;
