import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crust Pizza Co. | Made-From-Scratch Pizza",
  description: "Chicago-style thin crust pizza, made from scratch and ready to share.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
