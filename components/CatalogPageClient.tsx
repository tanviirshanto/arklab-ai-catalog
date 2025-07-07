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
import { MenuIcon, XIcon } from "lucide-react"; // for toggle icons
import { Button } from "@/components/ui/button";
import GoogleLogoutButton from "./GoogleLogoutButton ";
import GoogleLoginButton from "./GoogleLoginButton";
import Image from "next/image";

interface Props {
  initialAgents: Agent[];
}

export default function CatalogPageClient({ initialAgents }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(setAgents(initialAgents));
    setLoading(false);
  }, [dispatch, initialAgents]);

  const activeFilters: string[] = [];
  if (filters.status.length)
    activeFilters.push(`Status: ${filters.status.join(", ")}`);
  if (filters.category.length)
    activeFilters.push(`Category: ${filters.category.join(", ")}`);
  if (filters.pricingModel)
    activeFilters.push(`Pricing: ${filters.pricingModel}`);

  const title = "ArkLab AI Agents Catalog";

  const description = "Explore and filter powerful AI agents from ArkLab.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className="p-4 flex justify-end">
        {user?.email ? (
          <div className="flex items-center gap-3">
            <Image
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
            <GoogleLogoutButton />
          </div>
        ) : (
          <GoogleLoginButton />
        )}
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <Card className="p-4 md:p-8">
          <header className="text-center mb-8">
            <div className="text-4xl font-extrabold flex items-baseline justify-center gap-6 tracking-tight">
              {title} <ThemeSwitcher />
            </div>
          </header>

          {/* 🔽 Toggle Button on Small Screens */}
          <div className="md:hidden flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters((prev) => !prev)}
              className="flex items-center gap-2"
            >
              {showFilters ? (
                <XIcon className="w-4 h-4" />
              ) : (
                <MenuIcon className="w-4 h-4" />
              )}
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {/* 🔽 Filters Panel: always shown on md+, toggle on sm */}
          <section className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col items-center space-y-6 mb-10">
              <div className="w-full max-w-md">
                <SearchBar />
              </div>
              <div className="w-full max-w-2xl">
                <FilterPanel />
              </div>
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
