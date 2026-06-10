"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "accent";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-primary-glow hover:bg-primary-600 hover:shadow-primary-glow-lg active:bg-primary-700 active:scale-[0.98]",
  secondary:
    "bg-ds-surface text-ds-text-primary border border-ds-border shadow-elevation-1 hover:bg-ds-bg-secondary hover:border-ds-border-strong dark:hover:bg-ds-bg-secondary active:scale-[0.98]",
  ghost:
    "text-ds-text-secondary hover:text-ds-text-primary hover:bg-ds-bg-tertiary active:scale-[0.98]",
  outline:
    "border border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10 active:scale-[0.98]",
  accent:
    "bg-accent text-white shadow-accent-glow hover:bg-accent-dark hover:shadow-accent-glow active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-full",
  md: "px-6 py-3 text-sm font-medium gap-2 rounded-full",
  lg: "px-8 py-4 text-base font-semibold gap-2.5 rounded-full",
  xl: "px-10 py-5 text-lg font-semibold gap-3 rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "select-none cursor-pointer",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          icon && iconPosition === "left" && (
            <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
          )
        )}
        {children}
        {!loading && icon && iconPosition === "right" && (
          <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
