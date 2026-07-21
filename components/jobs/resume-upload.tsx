import { FileUp } from "lucide-react";

export function ResumeUpload() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-4">
        <h2 className="text-base font-semibold">
          Upload Candidate Resumes
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Upload one or multiple PDF resumes to begin AI screening.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 px-4 py-6 text-center transition-colors hover:border-primary/40 hover:bg-primary/5">
        <div className="mb-3 rounded-full bg-primary/10 p-2.5">
          <FileUp className="h-4 w-4 text-primary" />
        </div>

        <h3 className="text-sm font-semibold">
          Drag & Drop PDF Resumes
        </h3>

        <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
          Drop candidate resumes here or browse your computer to upload multiple PDF files.
        </p>

        <button
          disabled
          className="mt-5 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Browse Files
        </button>

        <p className="mt-4 text-[11px] text-muted-foreground">
          PDF only • Multiple uploads • Max 10 MB
        </p>

        <div className="mt-3 rounded-md bg-muted px-3 py-1 text-xs font-medium">
          0 resumes uploaded
        </div>
      </div>
    </div>
  );
}