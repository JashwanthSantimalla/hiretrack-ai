import { Bell, Search } from "lucide-react";
import type { Session } from "next-auth";

import { Input } from "@/components/ui/input";

interface NavbarProps {
  user?: Session["user"];
}

export default function Navbar({ user }: NavbarProps) {
  const initials =
    user?.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-20 flex h-[60px] items-center justify-between gap-5 rounded-2xl border border-border bg-[#09090B]/90 px-5 backdrop-blur">
      {/* Search */}

      <div className="relative w-full max-w-[430px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

        <Input
          placeholder="Search jobs, candidates, interviews..."
          className="h-10 border-zinc-800 bg-[#111417] pl-10 text-sm text-white placeholder:text-zinc-500 focus-visible:ring-[#22DDB8]"
        />
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-[#111417] text-zinc-400 transition-all duration-200 hover:border-[#22DDB8]/40 hover:text-[#22DDB8]">
          <Bell className="h-4.5 w-4.5" />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#111417] px-3 py-2 transition-all duration-200 hover:border-[#22DDB8]/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22DDB8]/15 text-sm font-semibold text-[#22DDB8]">
            {initials}
          </div>

          <div className="hidden min-w-0 text-left sm:block">
            <p className="max-w-[180px] truncate text-xs font-semibold leading-5 text-white">
              {user?.name ?? "Unknown User"}
            </p>

            <p className="text-[11px] uppercase tracking-wide text-zinc-500">
              {user?.role ?? "User"}
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}