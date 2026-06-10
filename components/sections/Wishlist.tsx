"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Heart, Bell, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Base para o modo troca",
    desc: "Use a lista como referência para encontrar anúncios compatíveis.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Destaques relevantes",
    desc: "Cartas marcadas como destaque podem aparecer para quem já demonstrou interesse.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Desejos organizados",
    desc: "Mantenha suas prioridades de coleção separadas dos seus anúncios.",
  },
];

export function Wishlist() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="lista-de-desejos"
      aria-label="Lista de desejos"
      className="section-padding bg-ds-bg relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 40%, rgba(14,147,132,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Wishlist screen */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <PhoneMockup size="lg">
              <div className="relative h-full w-full">
                <Image
                  src="/images/desejos.png"
                  alt=""
                  fill
                  unoptimized
                  sizes="300px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </PhoneMockup>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Lista de desejos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Monte sua lista{" "}
              <span className="text-gradient-primary">de desejos.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-10">
              Adicione cartas que deseja encontrar e use essa lista para orientar buscas,
              destaques e o modo troca.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  initial={shouldReduce ? {} : { opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-ds-text-primary mb-1">{benefit.title}</h3>
                    <p className="text-sm text-ds-text-secondary leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA hint */}
            <motion.div
              className="mt-10 p-4 rounded-2xl bg-primary/8 border border-primary/15"
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-primary font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                Quanto melhor sua lista, mais fácil configurar uma troca relevante.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
