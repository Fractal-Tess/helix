"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Code,
  Trophy,
  BarChart3,
} from "lucide-react";

import { NavMain } from "./NavMainClient";
import { NavProjects } from "./NavProjectsClient";
import { NavUser } from "./NavUserClient";
import { TeamSwitcher } from "./TeamSwitcherClient";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart3,
      isActive: true,
    },
    {
      title: "Learn",
      url: "/learn",
      icon: BookOpen,
      items: [
        {
          title: "All Languages",
          url: "/learn",
        },
        {
          title: "C Programming",
          url: "/learn/c",
        },
        {
          title: "Python",
          url: "/learn/python",
        },
        {
          title: "JavaScript",
          url: "/learn/javascript",
        },
      ],
    },
    {
      title: "Programming",
      url: "#",
      icon: Code,
      items: [
        {
          title: "C Programming",
          url: "/learn/c",
        },
        {
          title: "Python",
          url: "/learn/python",
        },
        {
          title: "JavaScript",
          url: "/learn/javascript",
        },
      ],
    },
  ],
  projects: [
    {
      name: "My Progress",
      url: "/dashboard",
      icon: Trophy,
    },
    {
      name: "Achievements",
      url: "/dashboard#achievements",
      icon: Trophy,
    },
    {
      name: "Coding Practice",
      url: "/learn",
      icon: Code,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
