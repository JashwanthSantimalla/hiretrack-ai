"use client";

import { Building2 } from "lucide-react";

export default function SidebarFooter() {
  return (
    <footer className="border-t border-border px-3 py-3">
      <button
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          border
          border-border
          bg-surface-elevated
          px-3
          py-2.5
          transition-all
          duration-200
          hover:border-primary/30
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            bg-primary/10
            text-primary
            shrink-0
          "
        >
          <Building2 size={18} />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <p className="truncate text-[13px] font-semibold text-foreground">
            HireTrack AI
          </p>

          <p className="truncate text-[11px] text-muted">
            Professional Workspace
          </p>
        </div>
      </button>
    </footer>
  );
}