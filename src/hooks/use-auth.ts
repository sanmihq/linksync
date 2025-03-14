"use client";

import { useUser } from "@clerk/nextjs";

export function useAuth() {
  const { user, isSignedIn } = useUser();

  return { user, isAuthenticated: isSignedIn };
}
