"use client";

import { cn } from "@/lib/utils";

export type CardType = "fire" | "water" | "dark" | "nature" | "electric" | "psychic";

interface TcgCardProps {
  name: string;
  type: CardType;
  power: number;
  rarity: 1 | 2 | 3;
  hp?: number;
  className?: string;
  mini?: boolean;
}

const typeConfig: Record<CardType, { gradient: string; badge: string; icon: string; textColor: string }> = {
  fire: {
    gradient: "from-orange-500 via-red-500 to-rose-600",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    icon: "🔥",
    textColor: "text-orange-300",
  },
  water: {
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: "💧",
    textColor: "text-blue-300",
  },
  dark: {
    gradient: "from-slate-700 via-slate-800 to-gray-900",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    icon: "🌑",
    textColor: "text-slate-300",
  },
  nature: {
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    badge: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: "🌿",
    textColor: "text-green-300",
  },
  electric: {
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    icon: "⚡",
    textColor: "text-yellow-300",
  },
  psychic: {
    gradient: "from-amber-500 via-orange-600 to-teal-800",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    icon: "✨",
    textColor: "text-amber-300",
  },
};

export function TcgCard({ name, type, power, rarity, hp = 100, className, mini = false }: TcgCardProps) {
  const config = typeConfig[type];
  const stars = Array.from({ length: rarity });

  if (mini) {
    return (
      <div
        className={cn(
          "relative rounded-xl overflow-hidden cursor-pointer select-none border border-white/25",
          "transition-transform duration-300 hover:scale-105",
          className
        )}
        style={{ width: 80, aspectRatio: "6.3 / 8.8" }}
        aria-hidden="true"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", config.gradient)} />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-[7%] rounded-lg border border-white/35 bg-white/18 shadow-inner" />

        <div className="absolute left-[13%] right-[13%] top-[12%] flex items-center justify-between gap-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-white/65" />
          <div className="h-2 w-2 rounded-full bg-white/70" />
        </div>

        <div className="absolute left-[13%] right-[13%] top-[21%] h-[34%] rounded-md border border-white/40 bg-white/22 shadow-inner" />

        <div className="absolute left-[15%] right-[15%] top-[60%] space-y-1">
          <div className="h-1 rounded-full bg-white/65" />
          <div className="h-1 rounded-full bg-white/45" />
          <div className="h-1 rounded-full bg-white/45 w-4/5" />
        </div>

        <div className="absolute left-[15%] right-[15%] bottom-[15%] space-y-1">
          <div className="h-1 rounded-full bg-white/40" />
          <div className="h-1 rounded-full bg-white/35 w-3/4" />
        </div>

        <div className="absolute left-[15%] right-[15%] bottom-[8%] flex items-center justify-between">
          <div className="h-2 w-5 rounded-full bg-white/40" />
          <div className="h-2 w-5 rounded-full bg-white/40" />
        </div>

        {/* Holographic sheen */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer select-none",
        "transition-all duration-300 hover:scale-[1.02] hover:shadow-elevation-4",
        "border border-white/10",
        className
      )}
      style={{ width: 180, height: 252, perspective: "600px" }}
    >
      {/* Card background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", config.gradient)} />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.3) 0%, transparent 50%)",
        }}
      />

      {/* Card border gradient */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 40%, rgba(255,255,255,0.1) 100%)",
        }}
      />

      <div className="relative z-10 p-3 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-white font-bold text-sm leading-tight drop-shadow">{name}</p>
            <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full border font-medium", config.badge)}>
              {config.icon} {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-[9px] font-medium">HP</p>
            <p className="text-white font-bold text-sm">{hp}</p>
          </div>
        </div>

        {/* Card image area */}
        <div
          className="flex-1 rounded-xl bg-black/25 protected-card-art flex items-center justify-center mb-2 relative overflow-hidden"
        >
          <span className="text-5xl drop-shadow-lg">{config.icon}</span>
          {/* Shine effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)",
            }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {stars.map((_, i) => (
              <span key={i} className="text-yellow-300 text-xs">★</span>
            ))}
          </div>
          <div className="text-right">
            <p className="text-white/60 text-[9px]">PODER</p>
            <p className={cn("font-black text-base", config.textColor)}>{power}</p>
          </div>
        </div>
      </div>

      {/* Holographic shimmer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-30"
        style={{
          background:
            "linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 60%, transparent 80%)",
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
}
