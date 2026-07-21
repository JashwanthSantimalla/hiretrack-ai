import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

import { JobCard } from "@/components/jobs/job-card";

import { getJobs } from "@/lib/services/job";

export default async function JobsPage() {
  const jobs = await getJobs();

  if (jobs.length === 0) {
    return (
      <EmptyState
        title="No jobs yet"
        description="Create your first job to start receiving and screening candidates with AI."
        action={
          <Link href="/jobs/new">
            <Button>Create First Job</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-3">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-2xl font-bold tracking-tight">
            Jobs ({jobs.length})
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage and track your hiring pipeline.
          </p>

        </div>

        <Link href="/jobs/new">
          <Button>+ New Job</Button>
        </Link>

      </div>

      {/* Jobs */}

      <div className="space-y-2">

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}

      </div>

    </div>
  );
}