"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
  user?: Session["user"];
}

export default function AppShell({
  children,
  user,
}: AppShellProps) {
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      <div className="grid h-full grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex h-full flex-col overflow-hidden bg-background">
          {/* Navbar */}
          <header className="sticky top-0 z-40 flex-shrink-0 px-5 pt-5">
            <div className="glass rounded-2xl border-subtle shadow-md">
              <Navbar user={user} />
            </div>
          </header>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="page-container page-enter py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}