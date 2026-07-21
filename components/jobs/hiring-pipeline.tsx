import {
  CheckCircle2,
  Eye,
  XCircle,
  UserCheck,
  CalendarDays,
  UserX,
} from "lucide-react";

const aiPipeline = [
  {
    title: "Recommended",
    count: 0,
    icon: CheckCircle2,
  },
  {
    title: "Worth Reviewing",
    count: 0,
    icon: Eye,
  },
  {
    title: "Below Threshold",
    count: 0,
    icon: XCircle,
  },
];

const recruiterPipeline = [
  {
    title: "Shortlisted",
    count: 0,
    icon: UserCheck,
  },
  {
    title: "Interviews",
    count: 0,
    icon: CalendarDays,
  },
  {
    title: "Rejected",
    count: 0,
    icon: UserX,
  },
];

export function HiringPipeline() {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Hiring Pipeline
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Review AI recommendations and track recruiter decisions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Decisions */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            AI Decisions
          </h3>

          <div className="space-y-3">
            {aiPipeline.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all hover:border-primary/40 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>

                  <span className="text-lg font-bold">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recruiter Decisions */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Recruiter Decisions
          </h3>

          <div className="space-y-3">
            {recruiterPipeline.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all hover:border-primary/40 hover:bg-muted/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>

                  <span className="text-lg font-bold">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}