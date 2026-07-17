"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between gap-8 border border-border rounded-2x1 bg-[#09090B]/90 px-14 backdrop-blur">
      <div className="relative w-full max-w-[540px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <Input
          placeholder="Search jobs, candidates, interviews..."
          className="border-zinc-800 bg-[#111417] pl-10 text-white placeholder:text-zinc-500 focus-visible:ring-[#22DDB8]"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-[#111417] text-zinc-400 transition-all duration-200 hover:border-[#22DDB8]/40 hover:text-[#22DDB8]">
          <Bell className="h-5 w-5" />
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#111417] px-3 py-2 transition-all duration-200 hover:border-[#22DDB8]/40">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22DDB8]/15 font-semibold text-[#22DDB8]">
            JS
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-white">Jashwanth</p>
            <p className="text-xs text-zinc-500">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  )
}
