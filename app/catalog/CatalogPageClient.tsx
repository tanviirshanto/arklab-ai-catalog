"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/lib/redux/store";
import { setAgents } from "@/lib/redux/slices/agentsSlice";

import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import FilteredAgentList from "@/components/FilteredAgentList";
import { Agent } from "@/lib/types";

export default function CatalogPageClient({ initialAgents }: { initialAgents: Agent[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setAgents(initialAgents));
    setLoading(false);
  }, [dispatch, initialAgents]);

  // Dynamically update document title and meta description
  useEffect(() => {
    const activeFilters: string[] = [];
    if (filters.status.length) activeFilters.push(`Status: ${filters.status.join(", ")}`);
    if (filters.category.length) activeFilters.push(`Category: ${filters.category.join(", ")}`);
    if (filters.pricingModel) activeFilters.push(`Pricing: ${filters.pricingModel}`);

    const title =
      activeFilters.length > 0
        ? `ArkLab AI Agents — Filtered by ${activeFilters.join(" • ")}`
        : "ArkLab AI Agents Catalog";

    const description = activeFilters.length
      ? `Filters applied: ${activeFilters.join(", ")}.`
      : "Explore and filter powerful AI agents from ArkLab.";

    document.title = title;

    let metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }
  }, [filters]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">ArkLab AI Agents Catalog</h1>
      <SearchBar />
      <FilterPanel />
      <FilteredAgentList loading={loading} />
    </main>
  );
}
