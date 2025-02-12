"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Settings,
  Settings2,
} from "lucide-react"

import { NavContentCustomers } from "@/components/workspaceid/sidebar/nav-content-customers"

import { NavSecondary } from "@/components/workspaceid/sidebar/nav-secondary"
import { NavUser } from "@/components/workspaceid/sidebar/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { NavContentSettings } from "./nav-content-settings"
import { NavContentWorkspaces } from "./nav-contect-workspaces"


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navCustomers: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
      items: [
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Locations",
          url: "#",
        },
        {
          title: "Passwords",
          url: "#",
        },
      ],
    },
    {
      title: "Processes",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Device set-up",
          url: "#",
        },
        {
          title: "Account management",
          url: "#",
        },
        {
          title: "Device management",
          url: "#",
        },
      ],
    },
    {
      title: "Documents",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Project related",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Apps and services",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Applications",
          url: "#",
        },
        {
          title: "Networks",
          url: "#",
        },
        {
          title: "Services",
          url: "#",
        },
        {
          title: "Certificates",
          url: "#",
        },
      ],
    },
  ],
  navSettings: [
    {
      title: "Workspace",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Locations",
          url: "#",
        },
        {
          title: "Passwords",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Device set-up",
          url: "#",
        },
        {
          title: "Account management",
          url: "#",
        },
        {
          title: "Device management",
          url: "#",
        },
      ],
    },
    {
      title: "Agents",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Project related",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Images",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Project related",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  navWorkspaces: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
      items: [
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Locations",
          url: "#",
        },
        {
          title: "Passwords",
          url: "#",
        },
      ],
    },
    {
      title: "Processes",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Device set-up",
          url: "#",
        },
        {
          title: "Account management",
          url: "#",
        },
        {
          title: "Device management",
          url: "#",
        },
      ],
    },
    
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const projectId = pathname.split('/')[2];

  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
      <div className="flex flex-col p-4 gap-4">
            {pathname.endsWith('/settings') && <NavContentSettings items={data.navSettings} />}
            {projectId && !pathname.endsWith('/settings') && <NavContentCustomers items={data.navCustomers} />}
            {!projectId && !pathname.endsWith('/settings') && <NavContentWorkspaces items={data.navWorkspaces} />}
        </div>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>

  )
}
