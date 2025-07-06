// app/catalog/page.tsx
import { Agent } from "@/lib/types";
import agentsData from "@/lib/mock-agents.json";
import CatalogPageClient from "./catalog/CatalogPageClient";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {
  await new Promise((res) => setTimeout(res, 1000));

  const agents: Agent[] = agentsData.map((a) => ({
    ...a,
    status: a.status as Agent["status"],
    pricingModel: a.pricingModel as Agent["pricingModel"],
  }));

  // Pass agents as props to the client component
  return <CatalogPageClient initialAgents={agents} />;
}
