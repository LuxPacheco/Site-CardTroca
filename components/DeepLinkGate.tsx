"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AppStoreBadgeButton } from "@/components/AppStoreBadgeButton";

interface DeepLinkGateProps {
  deepLink: string;
}

export function DeepLinkGate({ deepLink }: DeepLinkGateProps) {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    window.location.href = deepLink;

    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [deepLink]);

  if (!showFallback) {
    return (
      <main className="min-h-screen bg-ds-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <p className="text-ds-text-secondary text-sm">Abrindo o CardTroca…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ds-bg flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 text-center max-w-sm">
        <Image
          src="/logo-vertical-1.svg"
          alt="CardTroca"
          width={160}
          height={96}
          className="h-16 w-auto"
          priority
          unoptimized
        />

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-ds-text-primary">
            Baixe o CardTroca
          </h1>
          <p className="text-ds-text-secondary text-base leading-relaxed">
            Marketplace de cartas Pokémon TCG. Troque, compre e anuncie com pessoas próximas.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <AppStoreBadgeButton store="apple" />
          <AppStoreBadgeButton store="google" />
        </div>
      </div>
    </main>
  );
}
