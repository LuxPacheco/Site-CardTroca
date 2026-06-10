import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CardTroca — Troque, compre e anuncie cartas TCG",
  description:
    "O CardTroca organiza negociações entre colecionadores de TCG, com busca por localização, anúncios, lista de desejos, modo troca e chat. A base atual está preparada para cartas Pokémon TCG.",
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
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cardtroca.app",
    title: "CardTroca — Troque, compre e anuncie cartas TCG",
    description:
      "Negociações de TCG com localização, anúncios, lista de desejos, modo troca e chat.",
    siteName: "CardTroca",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardTroca — Troque, compre e anuncie cartas TCG",
    description:
      "Negociações de TCG com localização, anúncios, lista de desejos, modo troca e chat.",
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
              var d=window.matchMedia('(prefers-color-scheme: dark)').matches;
              if(t==='dark'||(t!=='light'&&d)){document.documentElement.classList.add('dark')}
              if(new URLSearchParams(location.search).get('preview')==='1'){document.documentElement.classList.add('preview-mode')}
            }catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ds-bg text-ds-text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
