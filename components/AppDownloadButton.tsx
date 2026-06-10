"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Store = "ios" | "android" | "unknown";

interface AppDownloadButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "ghost" | "outline" | "accent";
  fullWidth?: boolean;
  className?: string;
}

const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL;
const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

function detectStore(): Store {
  const ua = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() ?? "";
  const isIOS =
    /iphone|ipad|ipod/.test(ua) ||
    (platform === "macintel" && window.navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (/android/.test(ua)) return "android";
  return "unknown";
}

export function openAppStore() {
  const store = detectStore();
  const target =
    store === "ios"
      ? appStoreUrl
      : store === "android"
        ? playStoreUrl
        : playStoreUrl || appStoreUrl;

  if (target) {
    window.open(target, "_blank", "noopener,noreferrer");
    return;
  }

  window.alert("O CardTroca estará disponível em breve na App Store e no Google Play.");
}

export function AppDownloadButton({
  size = "md",
  variant = "primary",
  fullWidth = false,
  className,
}: AppDownloadButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      icon={<Download className="w-4 h-4" />}
      className={className}
      onClick={openAppStore}
    >
      Baixar App
    </Button>
  );
}
