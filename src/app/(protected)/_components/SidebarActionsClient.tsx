"use client";

import { Button } from "~/components/ui/button";
import { Plus, Settings } from "lucide-react";
import { useProfile } from "~/hooks/useProfile";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export function SidebarActionsClient() {
  const { addXp } = useProfile();

  const handleAddXp = async () => {
    try {
      await addXp(250);
    } catch (error) {
      console.error("Failed to add XP:", error);
    }
  };

  return (
    <div className="mt-auto space-y-2">
      {/* XP Test Button */}
      <div className="px-4 py-2">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={handleAddXp}
        >
          <Plus className="h-4 w-4" />
          +250 XP
        </Button>
      </div>

      {/* Settings Button */}
      <div className="px-4 py-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </div>
  );
}