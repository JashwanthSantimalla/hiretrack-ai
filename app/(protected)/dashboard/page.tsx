import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { OnboardingDashboard } from "@/components/dashboard/onboarding-dashboard";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews";
import { QuickActions } from "@/components/dashboard/quick-actions";

import { getDashboardData } from "@/lib/services/dashboard";

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  return (
    <div className="space-y-8">
      <DashboardHeader />

      {dashboard.isFirstTimeUser ? (
        <OnboardingDashboard />
      ) : (
        <>
          <StatsCards />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>

            <UpcomingInterviews />
          </div>

          <QuickActions />
        </>
      )}
    </div>
  );
}