"use client"

import * as React from "react"
import {
  IconCake,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconDoorEnter,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconQuestionMark,
  IconReport,
  IconSearch,
  IconSettings,
  IconUser,
  IconUserCancel,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Members",
      url: "/members",
      icon: IconUsers,
    },
    {
      title: "Sales",
      url: "/sales",
      icon: IconChartBar,
    },
    {
      title: "Enquiries",
      url: "/enquiries",
      icon: IconSearch,
    },
    {
      title: "To Do",
      url: "/todo",
      icon: IconListDetails,
    },
    {
      title: "Service",
      url: "/services",
      icon: IconReport,
    },
    {
      title: "Diet Chart",
      url: "/diet",
      icon: IconSettings,
    }
    
  ],
  navSecondary: [
    {
      title: "Attendance",
      url: "/attendance",
      icon: IconDoorEnter,
    },
  ],
  documents: [
    {
      name: "New Member",
      url: "/members/new",
      icon: IconUser,
    },
    {
      name: "New Service",
      url: "/services/new",
      icon: IconDatabase,
    },
    {
      name: "New Enquiry",
      url: "/enquiries/new",
      icon: IconFileDescription,
    },
    {
      name: "New Sale",
      url: "/sales/new",
      icon: IconFileAi,
    },
    {
      name: "Invoices",
      url: "/sales/invoices",
      icon: IconFileWord,
    }
    
  ],
  followups: [
    {
      name: "Enquiries",
      url: "/enquiries/followups",
      icon: IconQuestionMark,
    },
    {
      name: "Membership",
      url: "/sales/followups",
      icon: IconUserCancel,
    },
    {
      name: "Birthdays",
      url: "/members/birthdays",
      icon: IconCake,
    }
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Synergy Fitness</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} title="Quick Creates"/>
        <NavDocuments items={data.followups} title="Follow Ups"/>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
