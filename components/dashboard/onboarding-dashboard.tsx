import Link from "next/link";
import type { ReactNode } from "react";

import {
  ArrowRight,
  Briefcase,
  BrainCircuit,
  CalendarCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function OnboardingDashboard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
      <div className="max-w-3xl">
        <span className="rounded-full border border-[#22DDB8]/30 bg-[#22DDB8]/10 px-3 py-1 text-sm font-medium text-[#22DDB8]">
          Welcome
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight">
          Welcome to HireTrack AI 👋
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          Your workspace is ready. Create your first job posting to start
          tracking candidates, managing interviews, and using AI-powered hiring
          tools.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Feature
            icon={<Briefcase className="h-5 w-5 text-[#22DDB8]" />}
            title="Post Unlimited Jobs"
          />

          <Feature
            icon={<Users className="h-5 w-5 text-[#22DDB8]" />}
            title="Manage Candidates"
          />

          <Feature
            icon={<BrainCircuit className="h-5 w-5 text-[#22DDB8]" />}
            title="AI Resume Matching"
          />

          <Feature
            icon={<CalendarCheck className="h-5 w-5 text-[#22DDB8]" />}
            title="Schedule Interviews"
          />
        </div>

        <div className="mt-10">
          <Link href="/jobs/new">
            <Button size="lg">
              Create Your First Job
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface FeatureProps {
  icon: ReactNode;
  title: string;
}

function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
      {icon}

      <span className="font-medium">{title}</span>
    </div>
  );
}