"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { MessageCircle, CheckCheck, Zap } from "lucide-react";

const benefits = [
  { icon: <MessageCircle className="w-4 h-4" />, text: "Comunicação direta", desc: "Sem intermediários, você fala diretamente com o colecionador." },
  { icon: <Zap className="w-4 h-4" />, text: "Negociações objetivas", desc: "Contexto da oferta já disponível para acelerar o acordo." },
  { icon: <CheckCheck className="w-4 h-4" />, text: "Experiência simplificada", desc: "Interface limpa focada na negociação, sem distrações." },
];

export function Chat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="chat"
      aria-label="Chat e negociação"
      className="section-padding bg-ds-bg-secondary relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(14,147,132,0.07) 0%, transparent 70%)",
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
              Chat e negociação
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Converse diretamente com{" "}
              <span className="text-gradient-primary">outros colecionadores.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-10">
              Quando existe match ou interesse em um anúncio, o aplicativo facilita o contato
              entre as partes com mensagens, imagens, encerramento da negociação e avaliação.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  className="flex items-start gap-4"
                  initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-bold text-ds-text-primary mb-0.5">{b.text}</p>
                    <p className="text-sm text-ds-text-secondary">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Evaluation screen */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup size="lg">
              <div className="relative h-full w-full">
                <Image
                  src="/images/avaliacao.png"
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
        </div>
      </div>
    </section>
  );
}
