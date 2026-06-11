"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Star, MapPin, Users, CheckCircle, AlertTriangle } from "lucide-react";

const trustFeatures = [
  { icon: <Users className="w-5 h-5" />, title: "Perfis com reputação", desc: "Veja avaliações e informações públicas antes de negociar." },
  { icon: <Star className="w-5 h-5" />, title: "Avaliações pós-negociação", desc: "Depois de encerrar uma conversa, avalie a experiência e construa reputação." },
  { icon: <Shield className="w-5 h-5" />, title: "Denúncia e bloqueio", desc: "O chat permite reportar comportamento inadequado e proteger a comunidade." },
];

const safetyTips = [
  "Prefira locais públicos e movimentados",
  "Eventos especializados de TCG são ideais",
  "Lojas e centros comerciais",
  "Leve um amigo quando possível",
];

const profileRatings = [
  { initial: "L", name: "Lucas M.", deals: 47, rating: 4.9, color: "from-orange-500 to-red-600", verified: true },
  { initial: "A", name: "Ana P.", deals: 23, rating: 5.0, color: "from-blue-500 to-teal-600", verified: true },
  { initial: "P", name: "Pedro C.", deals: 89, rating: 4.8, color: "from-yellow-500 to-amber-600", verified: true },
];

export function Security() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="seguranca"
      aria-label="Segurança e confiança"
      className="section-padding bg-ds-bg relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-16 rounded-3xl mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))", border: "1px solid rgba(16,185,129,0.2)" }}>
            <Shield className="w-8 h-8 text-emerald-500" />
          </div>
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4">
            Segurança
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
            Mais confiança em{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              cada negociação.
            </span>
          </h2>
          <p className="text-lg text-ds-text-secondary leading-relaxed">
            Reputação, avaliações e recursos de denúncia ajudam a criar uma comunidade
            mais confiável para negociações de TCG.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Trust features */}
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard
                variant="elevated"
                padding="lg"
                rounded="xl"
                className="h-full hover:shadow-elevation-3 transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-ds-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-ds-text-secondary leading-relaxed">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile ratings mockup */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard variant="elevated" padding="lg" rounded="2xl" className="shadow-elevation-2">
              <h3 className="font-bold text-ds-text-primary mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                Reputação de colecionadores
              </h3>
              <div className="space-y-3">
                {profileRatings.map((profile, i) => (
                  <motion.div
                    key={profile.name}
                    className="flex items-center gap-4 p-3 rounded-xl bg-ds-bg-secondary border border-ds-border hover:border-emerald-500/20 transition-colors duration-200"
                    initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center text-white font-bold`}>
                        {profile.initial}
                      </div>
                      {profile.verified && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center border border-ds-bg">
                          <CheckCircle className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-ds-text-primary">{profile.name}</p>
                      <p className="text-xs text-ds-text-tertiary">{profile.deals} negociações</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                        <span className="font-black text-sm text-ds-text-primary">{profile.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Safety tips */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard
              variant="elevated"
              padding="lg"
              rounded="2xl"
              className="h-full border-l-4"
              style={{ borderLeftColor: "rgba(217,142,4,0.5)" }}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-ds-text-primary">Dicas de segurança</h3>
                  <p className="text-sm text-ds-text-secondary mt-1">
                    Sempre recomendamos encontros em locais seguros e públicos.
                  </p>
                </div>
              </div>
              <ul className="space-y-3" role="list">
                {safetyTips.map((tip, i) => (
                  <motion.li
                    key={tip}
                    className="flex items-center gap-3"
                    initial={shouldReduce ? {} : { opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-sm text-ds-text-secondary">{tip}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 p-3 rounded-xl bg-ds-bg-secondary border border-ds-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-xs text-ds-text-secondary">
                    Você pode usar GPS ou localização cadastrada para buscar cartas por distância.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
