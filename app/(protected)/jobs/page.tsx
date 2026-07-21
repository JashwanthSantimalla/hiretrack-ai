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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>

          <p className="text-muted-foreground">
            {jobs.length} {jobs.length === 1 ? "job" : "jobs"} found
          </p>
        </div>

        <Link href="/jobs/new">
          <Button>Create Job</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-xl border p-6 bg-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {job.title}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {job.description}
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                {job.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}