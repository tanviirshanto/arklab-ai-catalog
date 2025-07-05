import "./globals.css";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";


export const metadata = {
  title: "ArkLab AI Agents Catalog",
  description: "Explore and filter powerful AI agents from ArkLab.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
