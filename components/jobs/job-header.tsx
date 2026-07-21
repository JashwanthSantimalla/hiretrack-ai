import type { JobModel } from "@/lib/db/generated/prisma/models";
import { MoreVertical } from "lucide-react";

interface JobHeaderProps {
  job: JobModel;
}

export function JobHeader({
  job,
}: JobHeaderProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {job.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{job.department ?? "General"}</span>

            <span>•</span>

            <span>
              {job.employmentType.replaceAll("_", " ")}
            </span>

            <span>•</span>

            <span>{job.location ?? "Remote"}</span>

            <span>•</span>

            <span>
              {job.openings} Opening
              {job.openings > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {job.status}
          </span>

          <button
            className="rounded-md border p-2 text-muted-foreground transition-colors hover:bg-muted"
            disabled
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}