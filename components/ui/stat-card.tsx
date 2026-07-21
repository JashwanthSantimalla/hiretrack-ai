import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-semibold">
            {value}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}