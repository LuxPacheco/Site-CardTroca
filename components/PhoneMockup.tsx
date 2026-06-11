"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const sizes = {
  sm: "w-[160px] sm:w-[200px]",
  md: "w-[200px] sm:w-[260px]",
  lg: "w-[220px] sm:w-[300px]",
};

export const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ children, className, size = "md", style }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative select-none", sizes[size], className)}
        style={{ perspective: "1000px", ...style }}
        aria-hidden="true"
      >
        {/* Phone outer frame */}
        <div
          className="relative rounded-[44px] overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #272D36 0%, #1C2128 40%, #14171C 100%)",
            padding: "3px",
          }}
        >
          {/* Frame highlight */}
          <div
            className="absolute inset-0 rounded-[44px] pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)",
            }}
          />

          {/* Side buttons — left */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />
          <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />
          <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />

          {/* Side button — right */}
          <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-r" />

          {/* Screen */}
          <div
            className="relative bg-black rounded-[42px] overflow-hidden"
            style={{ aspectRatio: "9 / 19.5" }}
          >
            {/* Dynamic Island */}
            <div
              className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
              style={{
                width: "100px",
                height: "28px",
                background: "#000",
                borderRadius: "14px",
              }}
            >
              {/* Camera and sensor indicators */}
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
              </div>
            </div>

            {/* App content area */}
            <div className="absolute inset-0 overflow-hidden">
              {children || <DefaultScreen />}
            </div>

            {/* Screen glare */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
              }}
            />

            {/* Home indicator */}
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20"
              style={{
                width: "120px",
                height: "4px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "2px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";

function DefaultScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-white/60 text-sm font-medium">CardTroca</div>
    </div>
  );
}
