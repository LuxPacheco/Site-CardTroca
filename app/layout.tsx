import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AmplitudeProvider } from "@/components/AmplitudeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CardTroca — Troque, compre e anuncie cartas TCG",
  description:
    "A plataforma definitiva para colecionadores TCG. Busca por localização, anúncios, lista de desejos, modo troca e chat. Preparada neste momento para cartas Pokémon TCG.",
  keywords: [
    "troca de cartas",
    "cartas TCG",
    "TCG",
    "match de cartas",
    "compra venda cartas TCG",
    "colecionadores",
    "CardTroca",
  ],
  authors: [{ name: "CardTroca" }],
  creator: "CardTroca",
  publisher: "CardTroca",
  robots: { index: true, follow: true },
  icons: {
    icon: "/splash_logo.png",
    apple: "/splash_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cardtroca.app",
    title: "CardTroca — Troque, compre e anuncie cartas TCG",
    description:
      "Negociações de TCG com localização, anúncios, lista de desejos, modo troca e chat.",
    siteName: "CardTroca",
    images: [
      {
        url: "https://cardtroca.app/splash_logo.png",
        width: 1024,
        height: 1024,
        alt: "CardTroca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CardTroca — Troque, compre e anuncie cartas TCG",
    description:
      "Negociações de TCG com localização, anúncios, lista de desejos, modo troca e chat.",
    images: ["https://cardtroca.app/splash_logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6F8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Blocking script: apply dark class + preview mode before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var t=localStorage.getItem('cardtroca-theme');
              var h=new Date().getHours();
              var night=h>=18||h<6;
              var d=window.matchMedia('(prefers-color-scheme: dark)').matches;
              if(t==='dark'||(t!=='light'&&(night||d))){document.documentElement.classList.add('dark')}
              if(new URLSearchParams(location.search).get('preview')==='1'){document.documentElement.classList.add('preview-mode')}
            }catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ds-bg text-ds-text-primary">
        <Suspense>
          <AmplitudeProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AmplitudeProvider>
        </Suspense>
      </body>
    </html>
  );
}
