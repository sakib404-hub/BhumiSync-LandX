import { Metadata } from "next";
import { MutationHearingsConsole } from "@/app/_components/ac-land/hearings/MutationHearingsConsole";

export const metadata: Metadata = {
  title: "Cadastral Mutation Hearings | BhumiSync AC Land Court",
  description:
    "Official Cadastral Mutation Hearings Docket. Scheduled administrative sessions, digital summons compliance, and contested cadastral reviews for Savar AC Land.",
};

const HearingsPage = () => {
  return <MutationHearingsConsole />;
};

export default HearingsPage;
