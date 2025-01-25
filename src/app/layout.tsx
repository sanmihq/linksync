import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "./fonts/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "LinkSync - The best way to sync your links",
  description: "LinkSync is the best way to sync your links",
  keywords: [
    "LinkSync",
    "link aggregation",
    "link management",
    "linktree alternative",
  ],
  authors: [{ name: "Sanmi Akinwunmi", url: "x.com/sanmi_hq" }],
  creator: "Sanmi Akinwunmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
