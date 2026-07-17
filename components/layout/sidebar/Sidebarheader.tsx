import { appConfig } from "@/config/app";

export default function SidebarHeader() {
  return (
    <header className="border-b border-border px-6 py-6">
      <div className="flex items-center gap-4">
        {/* Logo */}

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-surface-elevated
            shadow-sm
          "
        >
          <div
            className="
              h-3
              w-3
              rounded-full
              bg-primary
              shadow-glow
            "
          />
        </div>

        {/* Brand */}

        <div className="min-w-0">
          <h1
            className="
              truncate
              text-lg
              font-semibold
              tracking-tight
              text-foreground
            "
          >
            {appConfig.name}
          </h1>

          <p
            className="
              mt-1
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-muted
            "
          >
            {appConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}