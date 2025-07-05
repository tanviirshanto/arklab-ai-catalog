import { Agent } from "@/lib/types";
import agentsData from "@/lib/mock-agents.json";
import CatalogPageWrapper from "./CatalogPageWrapper";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "ArkLab AI Agents Catalog",
  description: "Explore and filter powerful AI agents from ArkLab.",
};

async function getAgents(): Promise<Agent[]> {
  await new Promise((res) => setTimeout(res, 1000));
  return agentsData.map((a) => ({
    ...a,
    status: a.status as Agent["status"],
    pricingModel: a.pricingModel as Agent["pricingModel"],
  }));
}

export default async function CatalogPage() {
  const agents = await getAgents();
  return <CatalogPageWrapper initialAgents={agents} />;
}
