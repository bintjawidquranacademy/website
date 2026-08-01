import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("luxury-card rounded-[32px] p-6 md:p-8", className)}
      {...props}
    />
  );
}
