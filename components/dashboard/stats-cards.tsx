import {
  Briefcase,
  BrainCircuit,
  CalendarDays,
  FileSearch,
} from "lucide-react";

import { StatCard } from "@/components/ui/stat-card";

export function StatsCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="AI Recommended"
        value={12}
        description="Candidates ready for review"
        icon={BrainCircuit}
      />

      <StatCard
        title="Interviews Today"
        value={3}
        description="Scheduled interviews"
        icon={CalendarDays}
      />

      <StatCard
        title="Awaiting Screening"
        value={18}
        description="New resumes uploaded"
        icon={FileSearch}
      />

      <StatCard
        title="Open Jobs"
        value={6}
        description="Active hiring positions"
        icon={Briefcase}
      />

    </div>
  );
}