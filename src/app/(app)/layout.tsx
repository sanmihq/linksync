import type { Metadata } from "next";
import "../../app/globals.css";
import { geistSans } from "../fonts/fonts";
import { siteConfig } from "../config/site";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <ClerkProvider>
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
