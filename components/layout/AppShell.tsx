"use client";

import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-[264px_1fr]">
        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex flex-col overflow-hidden bg-background">
          {/* Floating Navigation */}

          <header className="sticky top-0 z-40 p-6 pb-0">
            <div className="glass rounded-2xl border-subtle shadow-md">
              <Navbar />
            </div>
          </header>

          {/* Page */}

          <main className="flex-1 overflow-y-auto">
            <div className="page-container page-enter py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}