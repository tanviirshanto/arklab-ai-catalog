"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import CatalogPageClient from "./CatalogPageClient";
import { Agent } from "@/lib/types";

interface Props {
  initialAgents: Agent[];
}

export default function CatalogPageWrapper({ initialAgents }: Props) {
  return (
    <Provider store={store}>
      <CatalogPageClient initialAgents={initialAgents} />
    </Provider>
  );
}
