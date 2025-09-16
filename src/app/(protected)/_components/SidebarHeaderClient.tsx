"use client";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import Image from "next/image";

export function SidebarHeaderClient() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild size="lg">
            <a href="/dashboard" className="flex items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/assets/logo/logo-64.webp"
                  alt="Helix Logo"
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Helix</span>
                <span className="truncate text-xs">Learning Platform</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
