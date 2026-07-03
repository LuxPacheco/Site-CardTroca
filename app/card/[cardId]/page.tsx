import type { Metadata } from "next";
import { DeepLinkGate } from "@/components/DeepLinkGate";

interface Props {
  params: Promise<{ cardId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { cardId } = await params;
  return {
    title: "Carta | CardTroca",
    description: "Veja esta carta à venda no CardTroca — marketplace de cartas Pokémon TCG.",
    openGraph: {
      title: "CardTroca — Carta à venda",
      description: "Troque, compre e anuncie cartas Pokémon TCG com pessoas próximas.",
      url: `https://cardtroca.com/card/${cardId}`,
      siteName: "CardTroca",
      images: [{ url: "https://cardtroca.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CardPage({ params }: Props) {
  const { cardId } = await params;
  return <DeepLinkGate deepLink={`cardtroca://card/${cardId}`} />;
}
