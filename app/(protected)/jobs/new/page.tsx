import { CreateJobForm } from "@/components/forms/create-job-form";

export default function NewJobPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Create Job</h1>

        <p className="mt-2 text-muted-foreground">
          Create a new job opening for your company.
        </p>
      </div>

      <CreateJobForm />
    </div>
  );
}