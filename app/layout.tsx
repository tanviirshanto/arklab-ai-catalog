// app/layout.tsx
"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import { ThemeProvider } from "@/components/theme-provider";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata = {
  title: "ArkLab AI Agents Catalog",
  description: "Explore and filter powerful AI agents from ArkLab.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem> <Provider store={store}>{children}</Provider></ThemeProvider>
      </body>
    </html>
  );
}
