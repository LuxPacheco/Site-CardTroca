"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MapPin, Clock, Shield, Users, Navigation } from "lucide-react";

const benefits = [
  { icon: <Navigation className="w-4 h-4" />, text: "Negociações locais" },
  { icon: <Clock className="w-4 h-4" />, text: "Menos tempo procurando" },
  { icon: <Users className="w-4 h-4" />, text: "Mais praticidade" },
  { icon: <Shield className="w-4 h-4" />, text: "Mais segurança" },
];

const nearbyUsers = [
  { initial: "L", name: "Lucas", dist: "0.8km", color: "from-orange-500 to-red-600", angle: 45, radius: 140 },
  { initial: "A", name: "Ana", dist: "1.2km", color: "from-blue-500 to-teal-600", angle: 140, radius: 155 },
  { initial: "P", name: "Pedro", dist: "2.1km", color: "from-yellow-500 to-amber-600", angle: 220, radius: 148 },
  { initial: "C", name: "Carol", dist: "2.8km", color: "from-slate-700 to-teal-800", angle: 310, radius: 150 },
  { initial: "M", name: "Mario", dist: "1.5km", color: "from-emerald-500 to-teal-600", angle: 90, radius: 160 },
];

function RadarMap() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, rgba(14,147,132,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-primary/20"
          style={{ width: ring * 100, height: ring * 100 }}
          animate={shouldReduce ? {} : { scale: [1, 1.04, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-10"
        style={{
          background: `
            linear-gradient(0deg, transparent 49%, rgba(14,147,132,0.5) 50%, transparent 51%),
            linear-gradient(90deg, transparent 49%, rgba(14,147,132,0.5) 50%, transparent 51%)
          `,
        }}
        aria-hidden="true"
      />

      {!shouldReduce && [0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/30"
          style={{ width: 80, height: 80 }}
          animate={{ scale: [1, 3.2], opacity: [0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
          aria-hidden="true"
        />
      ))}

      {nearbyUsers.map((user, i) => {
        const rad = (user.angle * Math.PI) / 180;
        const x = Math.cos(rad) * (user.radius / 1.8);
        const y = Math.sin(rad) * (user.radius / 1.8);

        return (
          <div
            key={user.initial}
            className="absolute flex flex-col items-center"
            style={{ left: "50%", top: "50%", marginLeft: x - 16, marginTop: y - 16 }}
          >
            <div
              className="absolute opacity-20"
              style={{
                width: 1,
                height: Math.sqrt(x * x + y * y),
                background: "linear-gradient(to bottom, transparent, rgba(14,147,132,0.6))",
                transformOrigin: "top",
                rotate: `${Math.atan2(-y, -x) * (180 / Math.PI) + 90}deg`,
                top: "50%",
                left: "50%",
              }}
              aria-hidden="true"
            />
            <div
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center border-2 border-white/20 shadow-elevation-2 cursor-pointer`}
              title={`${user.name} — ${user.dist}`}
            >
              <span className="text-white text-xs font-bold">{user.initial}</span>
            </div>
            <div className="mt-1 bg-black/70 dark:bg-white/10 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/10">
              <span className="text-white text-[8px] font-medium whitespace-nowrap">{user.dist}</span>
            </div>
          </div>
        );
      })}

      <div className="relative z-20">
        <div
          className="w-16 h-16 rounded-full shadow-primary-glow-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
        >
          <span className="text-white font-black text-lg">Eu</span>
        </div>
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-ds-bg border border-ds-border rounded-full px-2 py-0.5 shadow-elevation-2"
          animate={shouldReduce ? {} : { y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin className="w-2.5 h-2.5 text-primary" />
          <span className="text-ds-text-primary text-[9px] font-bold whitespace-nowrap">Sua localização</span>
        </motion.div>
      </div>
    </div>
  );
}

export function Geolocation() {
  return (
    <section
      id="geolocalizacao"
      aria-label="Geolocalização"
      className="py-6 lg:py-10 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(14,147,132,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <RadarMap />

            <div className="flex justify-center gap-6 mt-8">
              {[
                { value: "200km", label: "Raio ajustável" },
                { value: "10km", label: "Busca inicial" },
                { value: "GPS", label: "ou cidade cadastrada" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-black text-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-ds-text-tertiary mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Geolocalização
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Descubra oportunidades{" "}
              <span className="text-gradient-primary">perto de você.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-8">
              Encontre cartas anunciadas por colecionadores próximos. A localização ajuda
              a ordenar oportunidades, reduzir deslocamentos e facilitar conversas de troca ou venda.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-ds-surface border border-ds-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium text-ds-text-primary">{benefit.text}</span>
                </div>
              ))}
            </div>

            <GlassCard variant="elevated" padding="md" rounded="xl">
              <p className="text-xs font-semibold text-ds-text-tertiary mb-3 uppercase tracking-wider">
                Raio de busca
              </p>
              <div className="flex gap-2 flex-wrap">
                {["10km", "25km", "50km", "100km", "200km"].map((dist, i) => (
                  <span
                    key={dist}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      i === 1
                        ? "bg-primary text-white shadow-primary-glow"
                        : "bg-ds-bg-tertiary text-ds-text-secondary hover:bg-ds-border"
                    }`}
                  >
                    {dist}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ds-text-tertiary mt-3">
                Configure o raio de busca usando GPS ou a localização cadastrada no perfil.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
