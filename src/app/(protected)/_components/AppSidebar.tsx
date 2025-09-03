"use client";

import { Sidebar, SidebarContent } from "~/components/ui/sidebar";
import { SidebarHeaderClient } from "./SidebarHeaderClient";
import { SidebarNavigationClient } from "./SidebarNavigationClient";
import { SidebarActionsClient } from "./SidebarActionsClient";
import { SidebarProfileClient } from "./SidebarProfileClient";

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeaderClient />

      <SidebarContent>
        <SidebarNavigationClient />
        <SidebarActionsClient />
      </SidebarContent>

      <SidebarProfileClient />
    </Sidebar>
  );
}
