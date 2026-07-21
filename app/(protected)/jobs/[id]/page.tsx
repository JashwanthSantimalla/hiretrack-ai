import { notFound } from "next/navigation";

import { JobDetails } from "@/components/jobs/job-details";

import { getJobById } from "@/lib/services/job";

interface JobDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { id } = await params;

  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <JobDetails job={job} />
    </div>
  );
}