// app/layout.tsx
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "ArkLab AI Agents Catalog",
  description: "Explore and filter powerful AI agents from ArkLab.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
