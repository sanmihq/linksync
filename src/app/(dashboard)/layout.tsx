import "../../app/globals.css";
import type { Metadata } from "next";
import { geistSans } from "../fonts/fonts";
import { siteConfig } from "../config/site";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
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
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
