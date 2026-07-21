import type { ReactNode } from "react";

import { auth } from "@/lib/auth";

import AppShell from "@/components/layout/AppShell";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth();

  return (
    <AppShell user={session?.user}>
      {children}
    </AppShell>
  );
}