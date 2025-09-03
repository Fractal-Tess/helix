"use client";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { useUser, UserButton } from "@clerk/nextjs";
import { useProfile } from "~/hooks/useProfile";

export function SidebarProfileClient() {
  const { user } = useUser();
  const { profile } = useProfile();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="h-auto p-3">
            <div className="flex w-full items-center gap-3">
              <div className="relative">
                {/* Progress ring around UserButton */}
                <div className="relative">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                        userButtonPopoverCard: "shadow-lg",
                      },
                    }}
                  />

                  {/* Progress ring SVG overlay */}
                  <svg
                    className="pointer-events-none absolute inset-0 z-10"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                  >
                    {/* Background ring */}
                    <circle
                      cx={20}
                      cy={20}
                      r={18.5}
                      fill="none"
                      stroke="var(--muted)"
                      strokeWidth={3}
                    />
                    {/* Progress ring */}
                    <circle
                      cx={20}
                      cy={20}
                      r={18.5}
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 18.5} ${2 * Math.PI * 18.5}`}
                      strokeDashoffset={
                        2 * Math.PI * 18.5 * (1 - (profile?.progress ?? 0))
                      }
                      transform="rotate(-90 20 20)"
                      style={{
                        transition:
                          "stroke-dashoffset 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    />
                  </svg>
                </div>
              </div>

              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user?.username || user?.firstName || "User"}
                </span>
                {profile?.level && (
                  <span className="truncate text-xs text-muted-foreground">
                    Level {profile.level}
                  </span>
                )}
              </div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}