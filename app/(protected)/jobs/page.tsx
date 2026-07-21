import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Jobs</h1>

      <p className="text-muted-foreground">
        {jobs.length} {jobs.length === 1 ? "job" : "jobs"} found
      </p>
    </div>
  );
}