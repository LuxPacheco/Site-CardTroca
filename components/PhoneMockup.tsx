"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

// All radius values are proportional to 300px base (the original design size).
// lg: 145px mobile (×0.48), 220px sm (×0.73), 300px lg (×1.0)
// md: 150px mobile (×0.50), 220px sm (×0.73)
// sm: 120px mobile (×0.40), 180px sm (×0.60)
const sizeConfig = {
  sm: {
    width: "w-[120px] sm:w-[180px]",
    outerRadius: "rounded-[18px] sm:rounded-[26px]",
    innerRadius: "rounded-[17px] sm:rounded-[25px]",
  },
  md: {
    width: "w-[150px] sm:w-[220px]",
    outerRadius: "rounded-[22px] sm:rounded-[32px]",
    innerRadius: "rounded-[21px] sm:rounded-[31px]",
  },
  lg: {
    width: "w-[145px] sm:w-[220px] lg:w-[300px]",
    outerRadius: "rounded-[21px] sm:rounded-[32px] lg:rounded-[44px]",
    innerRadius: "rounded-[20px] sm:rounded-[31px] lg:rounded-[42px]",
  },
};

export const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ children, className, size = "md", style }, ref) => {
    const config = sizeConfig[size];

    return (
      <div
        ref={ref}
        className={cn("relative select-none", config.width, className)}
        style={{ perspective: "1000px", ...style }}
        aria-hidden="true"
      >
        {/* Phone outer frame */}
        <div
          className={cn("relative overflow-hidden", config.outerRadius)}
          style={{
            background: "linear-gradient(160deg, #272D36 0%, #1C2128 40%, #14171C 100%)",
            padding: "3px",
          }}
        >
          {/* Frame highlight */}
          <div
            className={cn("absolute inset-0 pointer-events-none z-10", config.outerRadius)}
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.04) 100%)",
            }}
          />

          {/* Side buttons — left */}
          <div className="absolute -left-[3px] top-[30%] w-[3px] h-[8%] bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />
          <div className="absolute -left-[3px] top-[40%] w-[3px] h-[10%] bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />
          <div className="absolute -left-[3px] top-[54%] w-[3px] h-[10%] bg-gradient-to-b from-gray-600 to-gray-700 rounded-l" />

          {/* Side button — right */}
          <div className="absolute -right-[3px] top-[38%] w-[3px] h-[13%] bg-gradient-to-b from-gray-600 to-gray-700 rounded-r" />

          {/* Screen */}
          <div
            className={cn("relative bg-black overflow-hidden", config.innerRadius)}
            style={{ aspectRatio: "9 / 19.5" }}
          >
            {/* Dynamic Island */}
            <div
              className="absolute top-[2%] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
              style={{
                width: "33%",
                height: "6%",
                background: "#000",
                borderRadius: "999px",
              }}
            >
              <div className="flex items-center gap-[15%]">
                <div className="w-[22%] aspect-square rounded-full bg-gray-900 border border-gray-800" />
                <div className="w-[16%] aspect-square rounded-full bg-gray-800" />
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
              className="absolute bottom-[1.5%] left-1/2 -translate-x-1/2 z-20"
              style={{
                width: "40%",
                height: "3px",
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
