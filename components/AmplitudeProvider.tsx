"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as amplitude from "@amplitude/analytics-browser";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  type CookieConsent,
} from "@/components/CookieConsent";

const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? "";

let initialized = false;

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const updateConsent = (event?: Event) => {
      const selected = event instanceof CustomEvent ? event.detail as CookieConsent : getCookieConsent();
      setConsent(selected);
    };

    updateConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  useEffect(() => {
    if (!API_KEY || !consent) return;

    if (consent === "rejected") {
      if (initialized) amplitude.setOptOut(true);
      return;
    }

    if (!initialized) {
      amplitude.init(API_KEY, {
        autocapture: {
          elementInteractions: true,
          pageViews: false,
          sessions: true,
          formInteractions: true,
        },
        defaultTracking: false,
      });
      initialized = true;
    }

    amplitude.setOptOut(false);
  }, [consent]);

  useEffect(() => {
    if (!API_KEY || consent !== "accepted") return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    amplitude.track("Page Viewed", { url, path: pathname });
  }, [consent, pathname, searchParams]);

  return <>{children}</>;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (!API_KEY || getCookieConsent() !== "accepted") return;
  amplitude.track(event, properties);
}
