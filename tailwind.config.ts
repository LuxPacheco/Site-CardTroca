import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary-rgb) / <alpha-value>)",
          50: "#ECFDF9",
          100: "#DCF5F0",
          200: "#B7ECE3",
          300: "#7DDBCF",
          400: "rgb(var(--color-primary-rgb) / <alpha-value>)",
          500: "rgb(var(--color-primary-rgb) / <alpha-value>)",
          600: "rgb(var(--color-primary-hover-rgb) / <alpha-value>)",
          700: "rgb(var(--color-primary-active-rgb) / <alpha-value>)",
          800: "#115E56",
          900: "#134E48",
          950: "#042F2A",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          light: "rgb(var(--color-accent-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--color-accent-dark-rgb) / <alpha-value>)",
        },
        ds: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          "bg-secondary": "rgb(var(--color-bg-secondary) / <alpha-value>)",
          "bg-tertiary": "rgb(var(--color-bg-tertiary) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          "surface-elevated": "rgb(var(--color-surface-elevated) / <alpha-value>)",
          "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
          "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
          "text-tertiary": "rgb(var(--color-text-tertiary) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
          "border-strong": "rgb(var(--color-border-strong) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, var(--color-primary-hover), var(--color-primary))",
        "gradient-accent": "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-light": "radial-gradient(at 40% 20%, hsla(173,82%,32%,0.12) 0px, transparent 60%), radial-gradient(at 80% 0%, hsla(174,72%,40%,0.10) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(39,96%,43%,0.05) 0px, transparent 50%)",
        "mesh-dark": "radial-gradient(at 40% 20%, hsla(174,70%,47%,0.20) 0px, transparent 60%), radial-gradient(at 80% 0%, hsla(172,76%,64%,0.14) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(39,90%,60%,0.10) 0px, transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "float-delayed": "float 6s ease-in-out 2.5s infinite",
        "float-long": "float 10s ease-in-out 1.5s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        ping2: "ping2 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping2-delayed": "ping2 2s cubic-bezier(0, 0, 0.2, 1) 0.7s infinite",
        "ping2-long": "ping2 2s cubic-bezier(0, 0, 0.2, 1) 1.4s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(1.5deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
        "glass-dark": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "primary-glow": "0 8px 32px rgba(14,147,132,0.24)",
        "primary-glow-lg": "0 16px 64px rgba(14,147,132,0.34)",
        "accent-glow": "0 8px 32px rgba(217,142,4,0.28)",
        "elevation-1": "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)",
        "elevation-2": "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
        "elevation-3": "0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
        "elevation-4": "0 16px 48px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.08)",
        "phone": "0 40px 120px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      perspective: {
        "1000": "1000px",
        "2000": "2000px",
      },
    },
  },
  plugins: [],
};

export default config;
