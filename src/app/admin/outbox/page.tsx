import { Metadata } from "next";
import { AdminOutboxConsole } from "@/app/_components/admin/outbox/AdminOutboxConsole";

export const metadata: Metadata = {
  title: "Inter-Agency Relay Outbox | BhumiSync Admin",
  description:
    "Asynchronous inter-agency message outbox: reliable event packet delivery between Sub-Registry, AC Land Court, and Zila Settlement offices.",
};

const OutboxPage = () => {
  return <AdminOutboxConsole />;
};

export default OutboxPage;
