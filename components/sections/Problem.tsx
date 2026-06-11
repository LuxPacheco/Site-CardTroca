"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MessageSquare, Search, Clock, MapPinOff, CheckCircle2 } from "lucide-react";

const painPoints = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Grupos dispersos",
    description: "Informações espalhadas em grupos de chat, redes sociais e fóruns sem organização.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Buscas manuais",
    description: "Encontrar alguém interessado em trocar uma carta específica exige horas de pesquisa.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Processo lento",
    description: "Da descoberta até o acordo, o processo é longo, repetitivo e frustrante.",
  },
  {
    icon: <MapPinOff className="w-5 h-5" />,
    title: "Distância desconhecida",
    description: "Você não sabe se a pessoa está a dois quilômetros ou do outro lado do país.",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Problem() {
  return (
    <section
      id="problema"
      aria-label="O problema"
      className="section-padding bg-ds-bg relative overflow-hidden"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(14,147,132,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Encontrar a carta certa{" "}
              <span className="text-gradient-primary">nem sempre é simples.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed">
              Hoje muitos colecionadores dependem de grupos, mensagens dispersas e buscas
              manuais para encontrar alguém disposto a trocar ou vender uma carta específica.
            </p>
          </div>
        </FadeUp>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {painPoints.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.1}>
              <GlassCard
                variant="elevated"
                padding="md"
                rounded="xl"
                className="h-full group hover:shadow-elevation-3 transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="font-bold text-ds-text-primary">{point.title}</h3>
                </div>
                <p className="text-sm text-ds-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Central statement */}
        <FadeUp delay={0.4}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-ds-text-secondary leading-relaxed mb-4">
              Esse processo normalmente é lento, confuso e pouco eficiente.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/8 border border-primary/15">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-lg font-bold text-ds-text-primary">
                O CardTroca centraliza tudo em um único lugar.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
