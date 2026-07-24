"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type CookieConsent = "accepted" | "rejected";

export const COOKIE_CONSENT_STORAGE_KEY = "cardtroca-cookie-consent-v1";
export const COOKIE_CONSENT_EVENT = "cardtroca:cookie-consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "cardtroca:open-cookie-preferences";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<CookieConsent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(getCookieConsent());

    const openPreferences = () => setConsent(null);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences);
  }, []);

  const saveConsent = (value: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    setConsent(value);
    window.dispatchEvent(
      new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, { detail: value }),
    );
  };

  if (consent !== null) return null;

  return (
    <section
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-ds-border bg-ds-surface p-5 shadow-elevation-3 sm:flex sm:items-center sm:gap-6 sm:p-6">
        <div className="flex-1">
          <h2 id="cookie-consent-title" className="text-base font-semibold text-ds-text-primary">
            Sua privacidade importa
          </h2>
          <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-ds-text-secondary">
            Usamos tecnologias necessárias para o funcionamento do site e, com sua autorização,
            dados de navegação para entender como ele é usado e melhorá-lo. Consulte nossa{" "}
            <Link href="/politica-de-privacidade" className="font-medium text-primary hover:text-primary-700 underline underline-offset-2">
              Política de Privacidade
            </Link>.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:min-w-max sm:flex-row-reverse">
          <button
            type="button"
            onClick={() => saveConsent("accepted")}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Aceitar todos
          </button>
          <button
            type="button"
            onClick={() => saveConsent("rejected")}
            className="rounded-full border border-ds-border px-5 py-2.5 text-sm font-semibold text-ds-text-primary transition-colors hover:bg-ds-bg-secondary"
          >
            Recusar
          </button>
        </div>
      </div>
    </section>
  );
}
