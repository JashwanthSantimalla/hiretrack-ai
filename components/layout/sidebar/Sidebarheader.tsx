import { appConfig } from "@/config/app";

export default function SidebarHeader() {
  return (
    <header className="border-b border-border px-4 py-3">
      <div className="flex items-center gap-2">
        {/* Logo */}

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated">
          <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
        </div>

        {/* Brand */}

        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold tracking-tight text-foreground">
            {appConfig.name}
          </h1>

          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            {appConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}