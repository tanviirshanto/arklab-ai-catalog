"use client";

import { motion } from "framer-motion";
import { Agent } from "@/lib/types";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.div
      className="h-full flex flex-col justify-between border rounded-lg p-4 shadow-sm cursor-pointer bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      layout
    >
      <div>
        <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{agent.name}</h2>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {agent.description}
        </p>
      </div>
      <div className="text-sm space-y-1 mt-auto text-gray-700 dark:text-gray-300">
        <div>
          <span className="font-medium">Status:</span> {agent.status}
        </div>
        <div>
          <span className="font-medium">Category:</span> {agent.category}
        </div>
        <div>
          <span className="font-medium">Pricing:</span> {agent.pricingModel}
        </div>
      </div>
    </motion.div>
  );
}
