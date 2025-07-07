// app/catalog/page.tsx
import CatalogPageClient from "@/components/CatalogPageClient";
import { getAgents } from "@/lib/getAgents";

export const dynamic = "force-dynamic";

export default async function CatalogPage() {

  const agents = await getAgents();

  // Pass agents as props to the client component
  return <CatalogPageClient initialAgents={agents} />;
}
