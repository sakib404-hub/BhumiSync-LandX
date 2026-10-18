import { MutationQueueConsole } from "@/app/_components/ac-land/queue/MutationQueueConsole";

export const metadata = {
  title: "Mutation Queue & Case Allocation — AC Land | BhumiSync",
  description:
    "Institutional queue for real-time cadastral mutation cases, Kanungo audits, and statutory SLA compliance tracking.",
};

const Page = () => {
  return <MutationQueueConsole />;
};

export default Page;
