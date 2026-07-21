import { CreateJobForm } from "@/components/forms/create-job-form";

export default function NewJobPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          Create Job
        </h1>

        <p className="text-sm text-muted-foreground">
          Fill in the information below to publish a new job opening.
        </p>
      </div>

      <CreateJobForm />
    </div>
  );
}