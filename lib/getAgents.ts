// lib/getAgents.ts
import { Agent } from "@/lib/types";

export async function getAgents(): Promise<Agent[]> {
  const res = await fetch("http://localhost:3000/mock-agents.json", {
    cache: "no-store", 
  });

  if (!res.ok) throw new Error("Failed to fetch agents");

  const data = await res.json();

  // simulate a delay
  await new Promise((res) => setTimeout(res, 1000));

  return data;
}
