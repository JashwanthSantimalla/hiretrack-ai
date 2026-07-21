"use client";

import Link from "next/link";
import { MoreVertical } from "lucide-react";

import type { JobGetPayload } from "@/lib/db/generated/prisma/models/Job";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type JobCardProps = {
  job: JobGetPayload<{
    include: {
      _count: {
        select: {
          applications: true;
        };
      };
    };
  }>;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block"
    >
      <div className="rounded-lg border bg-card px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-accent/10">

        {/* Header */}

        <div className="flex items-center justify-between gap-4">

          <div className="min-w-0">

            <h2 className="truncate text-[15px] font-semibold">
              {job.title}
            </h2>

            <p className="mt-0.5 text-xs text-muted-foreground">
              {job.department ?? "General"}
            </p>

          </div>

          <div className="flex items-center gap-1.5">

            <Select defaultValue={job.status}>
              <SelectTrigger
                size="sm"
                className="h-8 min-w-[96px] text-xs"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent>

                <SelectItem value="DRAFT">
                  Draft
                </SelectItem>

                <SelectItem value="OPEN">
                  Open
                </SelectItem>

                <SelectItem value="PAUSED">
                  Paused
                </SelectItem>

                <SelectItem value="CLOSED">
                  Closed
                </SelectItem>

              </SelectContent>

            </Select>

            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <MoreVertical className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* Metrics */}

        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-5">

          <Metric
            value={job._count.applications}
            label="Candidates"
          />

          <Metric
            value={0}
            label="Recommended"
          />

          <Metric
            value={0}
            label="Pending Review"
          />

          <Metric
            value={0}
            label="Interviews"
          />

          <Metric
            value={`0 / ${job.openings}`}
            label="Hired"
          />

        </div>

      </div>
    </Link>
  );
}

function Metric({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div>

      <p className="text-lg font-semibold leading-none">
        {value}
      </p>

      <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

    </div>
  );
}