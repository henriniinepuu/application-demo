import * as React from "react"
import { Settings, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"

export function NavSecondary({
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const router = useRouter()
  const pathname = usePathname()
  const workspaceId = pathname.split('/')[1]
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild size="sm">
                <div className="flex items-center gap-2" onClick={() => router.push(`/${workspaceId}/settings`)}>
                  <Settings />
                  <span>Settings</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
