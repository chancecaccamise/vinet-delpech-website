import { clsx } from "@/lib/clsx";

// Consistent max-width + horizontal padding wrapper used across sections.
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
