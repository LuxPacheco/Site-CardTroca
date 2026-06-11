"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as amplitude from "@amplitude/analytics-browser";

const API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ?? "";

let initialized = false;

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!API_KEY || initialized) return;
    amplitude.init(API_KEY, {
      autocapture: {
        elementInteractions: true, // cliques automáticos
        pageViews: false,          // controlamos manualmente abaixo
        sessions: true,
        formInteractions: true,
      },
      defaultTracking: false,
    });
    initialized = true;
  }, []);

  useEffect(() => {
    if (!API_KEY) return;
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    amplitude.track("Page Viewed", { url, path: pathname });
  }, [pathname, searchParams]);

  return <>{children}</>;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (!API_KEY) return;
  amplitude.track(event, properties);
}
