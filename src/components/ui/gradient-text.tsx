import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "hero" | "subtle";
}

export function GradientText({
  children,
  className,
  variant = "primary",
}: GradientTextProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent",
    hero: "bg-gradient-to-r from-primary via-primary/80 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift",
    subtle:
      "bg-gradient-to-r from-white via-primary/60 to-white bg-clip-text text-transparent",
  };

  return (
    <span className={cn(variants[variant], className)}>{children}</span>
  );
}
