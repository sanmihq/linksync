"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  ChartBarIcon,
  Command,
  Github,
  HomeIcon,
  LinkIcon,
  SettingsIcon,
  ShoppingCartIcon,
  Twitter,
  WrenchIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/app/config/site";
import { useAuth } from "@/hooks/use-auth";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname(); // Get current route
  const { user } = useAuth();
  const username = user?.username ?? "user";
  const url = `${siteConfig.url}/${username}`;

  // Function to check if a menu item is active
  const isActive = (menuUrl: string) => {
    return menuUrl !== "#" && pathname.startsWith(menuUrl);
  };

  const data = {
    user: {
      username,
      url,
    },
    navMain: [
      {
        title: "My LinkSync",
        url: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Shop",
        url: "/dashboard/shop",
        icon: ShoppingCartIcon,
      },
      {
        title: "Analytics",
        url: "#",
        icon: ChartBarIcon,
        items: [
          { title: "Traffic Overview", url: "/dashboard/analytics/overview" },
          {
            title: "Link Performance",
            url: "/dashboard/analytics/link-performance",
          },
          { title: "Engagement Stats", url: "/dashboard/analytics/engagement" },
        ],
      },
      {
        title: "Tools",
        url: "#",
        icon: WrenchIcon,
        items: [
          { title: "Social Planner", url: "/dashboard/tools/social-planner" },
          { title: "Link Shortener", url: "/dashboard/tools/link-shortener" },
          {
            title: "QR Code Generator",
            url: "/dashboard/tools/qr-code-generator",
          },
        ],
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: SettingsIcon,
      },
    ].map((item) => ({
      ...item,
      isActive: isActive(item.url), // Dynamically set `isActive`
    })),
    navSecondary: [
      { title: "Github", url: siteConfig.links.github, icon: Github },
      { title: "Twitter", url: siteConfig.links.x, icon: Twitter },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {siteConfig.name}
                  </span>
                  <span className="truncate text-xs">Application</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
