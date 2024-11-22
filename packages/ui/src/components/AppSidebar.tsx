'use client'
import { MessageSquare, SwatchBook, PartyPopper, Megaphone, User } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Chats",
    url: "/chats",
    icon: MessageSquare,
  },
  {
    title: "Broadcast",
    url: "/broadcast",
    icon: Megaphone,
  },
  {
    title: "Templates",
    url: "/templates",
    icon: SwatchBook,
  }
];

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="font-semibold text-sm text-slate-400">
        waba-gpt-app demo
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
