import { Metadata } from "next";
import { SystemStatesGallery } from "@/app/_components/system-states/SystemStatesGallery";

export const metadata: Metadata = {
  title: "System Guard & Restriction States | BhumiSync Platform",
  description:
    "Standardized sovereign ledger encumbrance, validation, and role-boundary exception states.",
};

const Page = () => {
  return <SystemStatesGallery />;
};

export default Page;
