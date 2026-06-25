import { cn } from "@/lib/utils";

/**
 * A certificate divider: a fine gold rule broken by a center lozenge. The
 * recurring structural mark of the "On the Record" system.
 */
export default function EngraveRule({ className }: { className?: string }) {
  return (
    <div className={cn("engrave-rule", className)} aria-hidden>
      <span className="lozenge" />
    </div>
  );
}
