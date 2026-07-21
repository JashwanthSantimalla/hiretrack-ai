"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";

export default function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto px-3 py-2">
      <div className="space-y-3">
        {navigation.map((section) => (
          <section key={section.label}>
            <h2 className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              {section.label}
            </h2>

            <div className="space-y-0">
              {section.items.map((item) => {
                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.disabled ? "#" : item.href}
                    aria-disabled={item.disabled}
                    className={`
                      group
                      relative
                      flex
                      h-9
                      items-center
                      gap-2.5
                      overflow-hidden
                      rounded-lg
                      px-3
                      text-[13px]
                      font-medium
                      transition-all
                      duration-200

                      ${
                        active
                          ? `
                            bg-primary/10
                            text-foreground
                          `
                          : `
                            text-secondary
                            hover:bg-surface-hover
                            hover:text-foreground
                          `
                      }

                      ${
                        item.disabled
                          ? `
                            pointer-events-none
                            opacity-40
                          `
                          : ""
                      }
                    `}
                  >
                    {active && (
                      <span
                        className="
                          absolute
                          left-0
                          top-2
                          bottom-2
                          w-1
                          rounded-r-full
                          bg-primary
                        "
                      />
                    )}

                    <Icon
                      size={16}
                      className={
                        active
                          ? "text-primary"
                          : "text-muted transition-colors group-hover:text-primary"
                      }
                    />

                    <span className="flex-1 truncate">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </nav>
  );
}