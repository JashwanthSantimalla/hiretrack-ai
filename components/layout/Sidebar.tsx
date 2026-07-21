"use client";

import SidebarHeader from "./sidebar/Sidebarheader";
import SidebarNavigation from "./sidebar/SidebarNavigation";
import SidebarFooter from "./sidebar/SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col bg-surface">
      <SidebarHeader />

      <SidebarNavigation />

      <SidebarFooter />
    </aside>
  );
}