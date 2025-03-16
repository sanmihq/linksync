"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavUser({
  user,
}: {
  user: {
    username: string;
    url: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-start space-x-4">
          <UserButton />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.username}</span>
            <span className="truncate text-xs">{user.url}</span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
