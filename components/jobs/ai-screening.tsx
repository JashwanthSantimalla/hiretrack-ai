import { BrainCircuit, Sparkles } from "lucide-react";

const features = [
  "Resume Parsing",
  "Skill Extraction",
  "Experience Analysis",
  "JD Matching",
  "AI Summary",
  "Match Score",
];

export function AIScreening() {
  return (
    <div className="rounded-xl border bg-card p-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <BrainCircuit className="h-4 w-4 text-primary" />
        </div>

        <div>
          <h2 className="text-base font-semibold">
            AI Screening
          </h2>

          <p className="text-sm text-muted-foreground">
            Analyze uploaded resumes using AI.
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 rounded-lg border bg-muted/20 p-4">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          Status
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-500" />

          <span className="text-sm font-medium">
            Waiting for resumes
          </span>
        </div>

        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Upload candidate resumes to begin AI analysis.
        </p>
      </div>

      {/* Features */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 rounded-lg border p-3"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />

            <span className="text-xs font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        disabled
        className="mt-4 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-60"
      >
        Start AI Screening
      </button>
    </div>
  );
}