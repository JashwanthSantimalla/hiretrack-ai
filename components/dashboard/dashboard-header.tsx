import { auth } from "@/lib/auth";

export async function DashboardHeader() {
  const session = await auth();

  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight">
        Dashboard
      </h1>

      <p className="text-sm text-muted-foreground">
        Welcome back, {session?.user?.name}. Here's what's happening with your hiring today.
      </p>
    </div>
  );
}