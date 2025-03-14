"use client";

import { siteConfig } from "@/app/config/site";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <Link href={siteConfig.url}>{siteConfig.name}</Link>
        {isAuthenticated ? (
          <UserButton />
        ) : (
          <SignUpButton mode="modal">
            <Button size="default" variant="outline">
              Get Started
            </Button>
          </SignUpButton>
        )}
      </div>
    </header>
  );
}
