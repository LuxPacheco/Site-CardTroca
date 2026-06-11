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
      <main id="main-content" className="pt-16 lg:pt-18">
        <div className="bg-ds-bg border-b border-ds-border sticky top-16 lg:top-18 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div key={active}>
          {features[active].component}
        </div>
      </main>
      <Footer />
    </>
  );
}
