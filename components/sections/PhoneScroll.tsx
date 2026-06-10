"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useReducedMotion,
} from "framer-motion";
import { PhoneMockup } from "@/components/PhoneMockup";
import { MapPin, Heart, MessageCircle, Layers, SlidersHorizontal } from "lucide-react";

/* ── App screens ──────────────────────────── */

function FeedScreen() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/proximas.png"
        alt=""
        fill
        unoptimized
        sizes="300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}

function MapScreen() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/localizacao.png"
        alt=""
        fill
        unoptimized
        sizes="300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}

function TradeSetupScreen() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/troca1.png"
        alt=""
        fill
        unoptimized
        sizes="300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}

function TradeSwipeScreen() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/troca2.png"
        alt=""
        fill
        unoptimized
        sizes="300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/chat2.png"
        alt=""
        fill
        unoptimized
        sizes="300px"
        className="object-cover"
        draggable={false}
      />
    </div>
  );
}

/* ── Per-screen animated wrapper ─────────────── */
/* Each screen owns its transforms — no hooks in callbacks */

interface ScreenLayerProps {
  screenIndex: MotionValue<number>;
  idx: number;
  children: React.ReactNode;
}

function ScreenLayer({ screenIndex, idx, children }: ScreenLayerProps) {
  const opacity = useTransform(
    screenIndex,
    [idx - 0.7, idx - 0.25, idx + 0.25, idx + 0.7],
    [0, 1, 1, 0]
  );
  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, zIndex: 10 + idx }}
    >
      {children}
    </motion.div>
  );
}

/* ── Text row per screen ─────────────────────── */

interface TextRowProps {
  screenIndex: MotionValue<number>;
  idx: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

function TextRow({ screenIndex, idx, title, subtitle, icon }: TextRowProps) {
  const opacity = useTransform(
    screenIndex,
    [idx - 0.65, idx - 0.25, idx + 0.25, idx + 0.65],
    [0.22, 1, 1, 0.22]
  );
  const scale = useTransform(
    screenIndex,
    [idx - 0.65, idx - 0.25, idx + 0.25, idx + 0.65],
    [0.96, 1, 1, 0.96]
  );
  return (
    <motion.div
      style={{ opacity, scale }}
      className="flex items-start gap-4 p-4 rounded-2xl"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">
            0{idx + 1}
          </span>
          <h3 className="text-base font-bold text-ds-text-primary">{title}</h3>
        </div>
        <p className="text-sm text-ds-text-secondary leading-relaxed">{subtitle}</p>
      </div>
    </motion.div>
  );
}

/* ── Progress bar per screen ─────────────────── */

interface ProgressBarProps {
  screenIndex: MotionValue<number>;
  idx: number;
}

function ProgressBar({ screenIndex, idx }: ProgressBarProps) {
  const scaleX = useTransform(
    screenIndex,
    [idx - 0.5, idx, idx + 0.5],
    [0, 1, 0]
  );
  return (
    <div className="h-1 rounded-full flex-1 bg-ds-border overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full"
        style={{ scaleX, transformOrigin: "left" }}
      />
    </div>
  );
}

/* ── Config ──────────────────────────────────── */

const screens = [
  {
    id: "feed",
    title: "Veja ofertas e destaques",
    subtitle: "Acompanhe cartas anunciadas, destaques e opções próximas de você.",
    icon: <Layers className="w-5 h-5" />,
    component: <FeedScreen />,
  },
  {
    id: "map",
    title: "Filtre por distância",
    subtitle: "Use sua localização ou cidade cadastrada para encontrar cartas em um raio definido.",
    icon: <MapPin className="w-5 h-5" />,
    component: <MapScreen />,
  },
  {
    id: "trade-setup",
    title: "Configure sua troca",
    subtitle: "Defina o que quer receber, escolha uma carta para oferecer e ajuste a distância máxima.",
    icon: <SlidersHorizontal className="w-5 h-5" />,
    component: <TradeSetupScreen />,
  },
  {
    id: "trade-swipe",
    title: "Demonstre interesse",
    subtitle: "Veja ofertas compatíveis e sinalize se quer avançar para uma possível negociação.",
    icon: <Heart className="w-5 h-5" />,
    component: <TradeSwipeScreen />,
  },
  {
    id: "chat",
    title: "Converse e negocie",
    subtitle: "Depois do match ou de uma oferta, converse, envie imagens e encerre a negociação.",
    icon: <MessageCircle className="w-5 h-5" />,
    component: <ChatScreen />,
  },
];

/* ── Main ────────────────────────────────────── */

export function PhoneScroll() {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone 3-D transforms — all at top level ✓
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [shouldReduce ? 0 : 18, 0, 0, shouldReduce ? 0 : -18]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [shouldReduce ? 0 : 6, 0, shouldReduce ? 0 : -4]
  );
  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.82, 1, 1, 0.82]
  );

  // Continuous 0-4 index driven by scroll — top level
  const screenIndex = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.45, 0.65, 0.85],
    [0, 1, 2, 3, 4]
  );

  return (
    <section
      id="como-funciona"
      aria-label="Como o CardTroca funciona"
      className="relative bg-ds-bg-secondary"
      ref={containerRef}
      style={{ height: "760vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-0 lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-full px-4 pointer-events-none">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
              Como funciona
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-ds-text-primary">
              Uma experiência de TCG começando por Pokémon TCG
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 lg:pt-24">
            {/* ── Phone column ── */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-1/2">
              <motion.div
                style={{
                  rotateY,
                  rotateX,
                  scale: phoneScale,
                  transformPerspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                <PhoneMockup size="lg">
                  <div className="relative h-full w-full">
                    {screens.map((screen, idx) => (
                      <ScreenLayer
                        key={screen.id}
                        screenIndex={screenIndex}
                        idx={idx}
                      >
                        {screen.component}
                      </ScreenLayer>
                    ))}
                  </div>
                </PhoneMockup>
              </motion.div>
            </div>

            {/* ── Text column ── */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-2">
                {screens.map((screen, idx) => (
                  <TextRow
                    key={screen.id}
                    screenIndex={screenIndex}
                    idx={idx}
                    title={screen.title}
                    subtitle={screen.subtitle}
                    icon={screen.icon}
                  />
                ))}
              </div>

              {/* Progress bars */}
              <div className="mt-6 flex gap-2" aria-hidden="true">
                {screens.map((screen, idx) => (
                  <ProgressBar key={screen.id} screenIndex={screenIndex} idx={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
