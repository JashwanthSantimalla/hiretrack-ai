import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ==========================================================
   Navigation Types
   ========================================================== */

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  disabled?: boolean;
}

export interface NavigationSection {
  label: string;
  items: NavigationItem[];
}

/* ==========================================================
   Navigation
   ========================================================== */

export const navigation: NavigationSection[] = [
  {
    label: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "HIRING",
    items: [
      {
        label: "Jobs",
        href: "/jobs",
        icon: BriefcaseBusiness,
      },
      {
        label: "Candidates",
        href: "/candidates",
        icon: Users,
      },
      {
        label: "Interviews",
        href: "/interviews",
        icon: CalendarClock,
      },
    ],
  },

  {
    label: "INTELLIGENCE",
    items: [
      {
        label: "Analytics",
        href: "/analytics",
        icon: BarChart3,
      },
      {
        label: "AI Assistant",
        href: "/assistant",
        icon: Sparkles,
        badge: "AI",
      },
    ],
  },

  {
    label: "WORKSPACE",
    items: [
      {
        label: "Workspace",
        href: "/workspace",
        icon: Building2,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];