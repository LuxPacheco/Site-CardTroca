"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MatchSystem } from "@/components/sections/MatchSystem";
import { Geolocation } from "@/components/sections/Geolocation";
import { Search } from "@/components/sections/Search";
import { Wishlist } from "@/components/sections/Wishlist";
import { Chat } from "@/components/sections/Chat";
import { cn } from "@/lib/utils";

const features = [
  { id: "match", label: "Sistema de Match", component: <MatchSystem /> },
  { id: "geolocalizacao", label: "Geolocalização", component: <Geolocation /> },
  { id: "busca", label: "Busca Inteligente", component: <Search /> },
  { id: "desejos", label: "Lista de Desejos", component: <Wishlist /> },
  { id: "chat", label: "Chat e Negociação", component: <Chat /> },
];

export default function FuncionalidadesPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16 lg:pt-18 min-h-screen bg-ds-bg">

        {/* Mobile: horizontal tabs */}
        <div className="lg:hidden bg-ds-bg border-b border-ds-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              {features.map((feature, i) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0",
                    active === i
                      ? "bg-primary text-white shadow-primary-glow"
                      : "text-ds-text-secondary hover:text-ds-text-primary hover:bg-ds-bg-tertiary"
                  )}
                >
                  {feature.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: sidebar + content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex gap-8 items-start">

            {/* Vertical sidebar — desktop only */}
            <aside className="hidden lg:flex flex-col gap-2 w-56 flex-shrink-0 sticky top-28">
              <p className="text-xs font-semibold text-ds-text-tertiary uppercase tracking-widest mb-2 px-3">
                Funcionalidades
              </p>
              {features.map((feature, i) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    active === i
                      ? "bg-primary text-white shadow-primary-glow"
                      : "text-ds-text-secondary hover:text-ds-text-primary hover:bg-ds-bg-tertiary"
                  )}
                >
                  {feature.label}
                </button>
              ))}
            </aside>

            {/* Feature content */}
            <div key={active} className="flex-1 min-w-0">
              {features[active].component}
            </div>

          </div>
        </div>

        {/* Mobile content */}
        <div key={`mobile-${active}`} className="lg:hidden">
          {features[active].component}
        </div>

      </main>
      <Footer />
    </>
  );
}
