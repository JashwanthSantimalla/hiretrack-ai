import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-8 py-16 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}