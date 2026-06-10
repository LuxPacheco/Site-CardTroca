"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { SlidersHorizontal, MapPin, Star, Tag, Package } from "lucide-react";

const filters = [
  { label: "Distância", icon: <MapPin className="w-3 h-3" /> },
  { label: "Condição", icon: <Star className="w-3 h-3" /> },
  { label: "Preço", icon: <Tag className="w-3 h-3" /> },
  { label: "Avaliação", icon: <Package className="w-3 h-3" /> },
  { label: "Recentes", icon: <SlidersHorizontal className="w-3 h-3" /> },
];

export function Search() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });
  const shouldReduce = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section
      id="busca"
      aria-label="Busca inteligente"
      className="section-padding bg-ds-bg-secondary relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(217,142,4,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Busca inteligente
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ds-text-primary leading-tight mb-6">
              Encontre exatamente{" "}
              <span className="text-gradient-primary">o que procura.</span>
            </h2>
            <p className="text-lg text-ds-text-secondary leading-relaxed mb-4">
              Pesquise no catálogo e encontre anúncios à venda por nome ou código da carta.
            </p>
            <p className="text-base text-ds-text-secondary leading-relaxed mb-10">
              A busca atual combina catálogo TCG, anúncios, distância, condição, preço,
              reputação do usuário e ordenação por resultados recentes.
            </p>

            {/* Filter list */}
            <div className="space-y-3">
              {filters.map((filter, i) => (
                <motion.div
                  key={filter.label}
                  className="flex items-center gap-3 cursor-pointer group"
                  initial={shouldReduce ? {} : { opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  onClick={() => setActiveFilter(i)}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      activeFilter === i
                        ? "bg-primary text-white shadow-primary-glow"
                        : "bg-ds-bg-tertiary text-ds-text-tertiary group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {filter.icon}
                  </div>
                  <span
                    className={`font-medium text-sm transition-colors duration-200 ${
                      activeFilter === i ? "text-primary" : "text-ds-text-secondary group-hover:text-ds-text-primary"
                    }`}
                  >
                    Ordenar por {filter.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search screen */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup size="lg">
              <div className="relative h-full w-full">
                <Image
                  src="/images/buscar.png"
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
