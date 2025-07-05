// CatalogPageServer.tsx
import { Agent } from "@/lib/types";
import { setAgents } from "@/lib/redux/slices/agentsSlice";
import { store } from "@/lib/redux/store";
import agentsData from "@/lib/mock-agents.json";

export const dynamic = "force-dynamic";

async function getAgents(): Promise<Agent[]> {
  await new Promise((res) => setTimeout(res, 1000));
  return agentsData.map((a) => ({
    ...a,
    status: a.status as Agent["status"],
    pricingModel: a.pricingModel as Agent["pricingModel"],
  }));
}

export default async function CatalogPageServer() {
  const agents = await getAgents();
  store.dispatch(setAgents(agents));
  return null; // This only does data fetching and store population server-side
}
