import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "subtle" | "elevated";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  rounded?: "md" | "lg" | "xl" | "2xl" | "3xl";
  border?: boolean;
  glow?: boolean;
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const roundeds = {
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  "2xl": "rounded-4xl",
  "3xl": "rounded-5xl",
};

const variants = {
  default: "glass",
  strong: "glass-strong",
  subtle:
    "bg-white/40 dark:bg-white/[0.03] backdrop-blur-sm border border-white/50 dark:border-white/[0.06]",
  elevated:
    "bg-white dark:bg-ds-surface-elevated shadow-elevation-3 border border-ds-border",
};

export function GlassCard({
  variant = "default",
  padding = "md",
  rounded = "xl",
  border = true,
  glow = false,
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        variants[variant],
        paddings[padding],
        roundeds[rounded],
        glow && "shadow-primary-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
