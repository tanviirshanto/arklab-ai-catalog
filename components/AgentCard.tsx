"use client";

import { motion } from "framer-motion";
import { Agent } from "@/lib/types";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.div
      className="border rounded-lg p-4 shadow-sm cursor-pointer bg-white"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      layout
    >
      <h2 className="font-semibold text-lg">{agent.name}</h2>
      <p className="text-sm text-muted-foreground mb-2">{agent.description}</p>
      <div className="text-sm">
        <span className="font-medium">Status:</span> {agent.status}
      </div>
      <div className="text-sm">
        <span className="font-medium">Category:</span> {agent.category}
      </div>
      <div className="text-sm">
        <span className="font-medium">Pricing:</span> {agent.pricingModel}
      </div>
    </motion.div>
  );
}
