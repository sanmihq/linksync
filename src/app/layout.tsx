import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  applicationName: "Linksync",
  title: "LinkSync - Your Unified Links Hub",
  description:
    "LinkSync is your go-to platform for creating a unified hub of links to all your social profiles and online content. Effortlessly manage, customize, and share your digital presence. Experience seamless integration and speed with LinkSync, crafted with Next.js.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[100rem] mx-auto`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
