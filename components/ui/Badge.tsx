import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "accent" | "success" | "warning" | "neutral" | "glass";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  dot?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:border-primary/30",
  accent: "bg-accent/10 text-accent border border-accent/20 dark:bg-accent/20 dark:border-accent/30",
  success: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:text-emerald-400",
  warning: "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400",
  neutral: "bg-ds-bg-tertiary text-ds-text-secondary border border-ds-border",
  glass: "glass text-ds-text-primary",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
};

export function Badge({
  variant = "neutral",
  size = "sm",
  dot,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        "transition-colors duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            variant === "primary" && "bg-primary",
            variant === "accent" && "bg-accent",
            variant === "success" && "bg-emerald-500",
            variant === "warning" && "bg-amber-500",
            variant === "neutral" && "bg-ds-text-tertiary",
            variant === "glass" && "bg-ds-text-primary"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
