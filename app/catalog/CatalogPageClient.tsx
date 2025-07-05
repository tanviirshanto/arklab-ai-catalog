"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import { RootState, AppDispatch } from "@/lib/redux/store";
import { setAgents } from "@/lib/redux/slices/agentsSlice";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import FilteredAgentList from "@/components/FilteredAgentList";
import { Agent } from "@/lib/types";

import { Card } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switch";

interface Props {
  initialAgents: Agent[];
}

export default function CatalogPageClient({ initialAgents }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setAgents(initialAgents));
    setLoading(false);
  }, [dispatch, initialAgents]);

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

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main className="max-w-5xl mx-auto p-6 sm:p-10">
        <Card className="p-8">
          <header className="text-center mb-8">
            <div className="text-4xl font-extrabold flex items-baseline justify-center gap-6 tracking-tight">{title} <ThemeSwitcher /></div>
            {activeFilters.length > 0 && (
              <p className="text-muted-foreground text-lg mt-2">{description}</p>
            )}
          </header>

          <section className="flex flex-col items-center space-y-6 mb-10">
            <div className="w-full  max-w-md">
              <SearchBar /> 
            </div>
            <div className="w-full max-w-2xl">
              <FilterPanel />
            </div>
          </section>

          <section>
            <FilteredAgentList loading={loading} />
          </section>
        </Card>
      </main>
    </>
  );
}
