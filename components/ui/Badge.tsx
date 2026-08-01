import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(200,155,60,0.26)] bg-[rgba(255,252,245,0.78)] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted-strong)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
