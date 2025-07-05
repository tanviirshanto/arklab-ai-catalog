"use client";

import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { RootState } from "@/lib/redux/store";
import AgentCard from "./AgentCard";
import AgentCardSkeleton from "./AgentCardSkeleton";

interface FilteredAgentListProps {
  loading?: boolean;
}

export default function FilteredAgentList({ loading = false }: FilteredAgentListProps) {
  const agents = useSelector((state: RootState) => state.agents.allAgents);
  const filters = useSelector((state: RootState) => state.filters);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <AgentCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const filtered = agents.filter((agent) => {
    const matchSearch =
      agent.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      agent.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchStatus =
      filters.status.length === 0 || filters.status.includes(agent.status);

    const matchCategory =
      filters.category.length === 0 || filters.category.includes(agent.category);

    const matchPricing =
      filters.pricingModel === "" || filters.pricingModel === agent.pricingModel;

    return matchSearch && matchStatus && matchCategory && matchPricing;
  });

  return (
    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence>
        {filtered.map((agent) => (
          <motion.div
            key={agent.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AgentCard agent={agent} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
