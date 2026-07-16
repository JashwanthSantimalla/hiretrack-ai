import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  FileText,
  CalendarClock,
  BarChart3,
  Settings,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: typeof LayoutDashboard;
};

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Candidates",
    href: "/candidates",
    icon: Users,
  },
  {
    title: "Applications",
    href: "/applications",
    icon: FileText,
  },
  {
    title: "Interviews",
    href: "/interviews",
    icon: CalendarClock,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];