"use client";

import {
  ChevronUp,
  Building2,
} from "lucide-react";

export default function SidebarFooter() {
  return (
    <footer
      className="
        border-t
        border-border
        p-4
      "
    >
      {/* Workspace */}

      <button
        className="
          interactive
          mb-4
          flex
          w-full
          items-center
          gap-2.5
          rounded-2xl
          border
          border-border
          bg-surface-elevated
          p-3
          hover:border-primary/30
          hover:shadow-glow
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <Building2 size={18} />
        </div>

        <div className="flex-1 text-left">
          <p
            className="
              text-sm
              font-semibold
            "
          >
            HireTrack AI
          </p>

          <p
            className="
              text-xs
              text-muted
            "
          >
            Professional Workspace
          </p>
        </div>
      </button>

      
    </footer>
  );
}