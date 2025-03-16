// app/dashboard/layout.tsx
import "../../app/globals.css";
import type { Metadata } from "next";
import { geistSans } from "../fonts/fonts";
import { siteConfig } from "../config/site";

import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "../convexClientProvider";

export const metadata: Metadata = {
  title: "Dashboard | " + siteConfig.title,
  description: siteConfig.description,
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <ClerkProvider>
          <ConvexClientProvider>
            <main>{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
