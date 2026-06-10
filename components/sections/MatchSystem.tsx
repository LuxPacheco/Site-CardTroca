"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { MessageCircle, Sparkles, Zap } from "lucide-react";

const steps = [
  { icon: "📦", title: "Você anuncia uma carta", desc: "Cadastre condição, idioma, preço e disponibilidade para troca, venda ou ambos." },
  { icon: "🔍", title: "Você define o que busca", desc: "Use uma carta específica ou sua lista de desejos como referência." },
  { icon: "🤝", title: "O app monta o feed", desc: "O CardTroca considera desejo, distância, valor, condição e reputação." },
  { icon: "💬", title: "O chat pode ser aberto", desc: "Com interesse mútuo, você decide abrir a conversa e negociar." },
];

export function MatchSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="match"
      aria-label="Sistema de Match"
      className="section-padding bg-ds-bg relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(14,147,132,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Sistema de Match
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Um match para{" "}
              <span className="text-gradient-primary">cada oportunidade.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-4">
              Informe o que você possui e o que procura. O CardTroca encontra pessoas
              compatíveis próximas de você.
            </p>
            <p className="text-base text-ds-text-secondary leading-relaxed mb-10">
              Inspirado na simplicidade dos aplicativos de relacionamento, o modo troca
              transforma uma busca dispersa em um fluxo direto: passar ou demonstrar interesse.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-4"
                  initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-10 h-10 rounded-xl glass border-gradient flex items-center justify-center text-lg flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <p className="font-bold text-ds-text-primary text-sm">{step.title}</p>
                    <p className="text-sm text-ds-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits row */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Menos buscas manuais", "Lista de desejos", "Raio configurável", "Chat após match"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium"
                >
                  <Zap className="w-3 h-3" />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Swipe screen visualization */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <PhoneMockup size="lg">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/swipe.png"
                    alt=""
                    fill
                    unoptimized
                    sizes="300px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </PhoneMockup>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhoneMockup size="lg">
              <div className="relative h-full w-full">
                <Image
                  src="/images/match.png"
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

          <motion.div
            className="order-1 lg:order-2"
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Depois do swipe
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-ds-text-primary leading-tight mb-6">
              O match acontece quando{" "}
              <span className="text-gradient-primary">os dois lados demonstram interesse.</span>
            </h3>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-8">
              Quando a intenção é mútua, o CardTroca confirma o match e libera o próximo
              passo da negociação: abrir o chat para combinar detalhes, condição, envio ou
              encontro presencial.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Interesse mútuo", icon: <Sparkles className="w-3 h-3" /> },
                { label: "Chat liberado", icon: <MessageCircle className="w-3 h-3" /> },
                { label: "Negociação direta", icon: <Zap className="w-3 h-3" /> },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
