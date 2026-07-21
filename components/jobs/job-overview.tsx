import type { JobModel } from "@/lib/db/generated/prisma/models";

interface JobOverviewProps {
  job: JobModel;
}

export function JobOverview({
  job,
}: JobOverviewProps) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Job Overview
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Reference information for this position.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <OverviewCard title="Employment">
          <OverviewItem
            label="Employment Type"
            value={job.employmentType.replaceAll("_", " ")}
          />

          <OverviewItem
            label="Workplace Type"
            value={job.workplaceType}
          />

          <OverviewItem
            label="Experience Level"
            value={job.experienceLevel}
          />

          <OverviewItem
            label="Minimum Experience"
            value={`${job.minimumExperience} year${
              job.minimumExperience === 1 ? "" : "s"
            }`}
          />
        </OverviewCard>

        <OverviewCard title="Compensation">
          <OverviewItem
            label="Salary"
            value={
              job.salaryMin && job.salaryMax
                ? `${job.currency} ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}`
                : "Not Specified"
            }
          />

          <OverviewItem
            label="Openings"
            value={job.openings.toString()}
          />

          <OverviewItem
            label="Application Deadline"
            value={
              job.applicationDeadline
                ? new Date(
                    job.applicationDeadline
                  ).toLocaleDateString()
                : "No Deadline"
            }
          />

          <OverviewItem
            label="Location"
            value={job.location ?? "Not Specified"}
          />
        </OverviewCard>
      </div>

      <div className="mt-4">
        <Section
          title="Job Description"
          content={job.description}
        />
      </div>

      <div className="mt-4">
        <Section
          title="Required Skills"
          content={job.requiredSkills.join(", ")}
        />
      </div>

      <div className="mt-4">
        <Section
          title="Preferred Skills"
          content={
            job.preferredSkills.length
              ? job.preferredSkills.join(", ")
              : "Not specified"
          }
        />
      </div>

      <div className="mt-4">
        <Section
          title="Minimum Qualification"
          content={
            job.minimumQualification ??
            "Not specified"
          }
        />
      </div>
    </div>
  );
}

interface OverviewCardProps {
  title: string;
  children: React.ReactNode;
}

function OverviewCard({
  title,
  children,
}: OverviewCardProps) {
  return (
    <div className="rounded-lg border p-5">
      <h3 className="mb-4 text-base font-semibold">
        {title}
      </h3>

      <div className="space-y-3">{children}</div>
    </div>
  );
}

interface OverviewItemProps {
  label: string;
  value: string;
}

function OverviewItem({
  label,
  value,
}: OverviewItemProps) {
  return (
    <div className="flex items-start justify-between gap-6">
      <span className="text-sm text-muted-foreground">
        {label}
      </span>

      <span className="text-right text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

interface SectionProps {
  title: string;
  content: string;
}

function Section({
  title,
  content,
}: SectionProps) {
  return (
    <div className="rounded-lg border p-5">
      <h3 className="mb-3 text-base font-semibold">
        {title}
      </h3>

      <p className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
        {content}
      </p>
    </div>
  );
}