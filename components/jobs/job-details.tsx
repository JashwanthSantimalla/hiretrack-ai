import type { JobModel } from "@/lib/db/generated/prisma/models";

import { AIScreening } from "./ai-screening";
import { HiringPipeline } from "./hiring-pipeline";
import { JobHeader } from "./job-header";
import { JobOverview } from "./job-overview";
import { ResumeUpload } from "./resume-upload";

interface JobDetailsProps {
  job: JobModel;
}

export function JobDetails({
  job,
}: JobDetailsProps) {
  return (
    <div className="space-y-6">
      <JobHeader job={job} />

      <ResumeUpload />

      <AIScreening />

      <HiringPipeline />

      <JobOverview job={job} />
    </div>
  );
}