"use client";

export function AppStoreBadgeButton({ store }: { store: "apple" | "google" }) {
  if (store === "apple") {
    return (
      <button
        type="button"
        onClick={() => {}}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-ds-surface border border-ds-border backdrop-blur-sm cursor-default"
        aria-label="Baixar o CardTroca na App Store"
      >
        <svg className="w-8 h-8 text-ds-text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <p className="text-ds-text-secondary text-[10px] font-medium leading-none mb-0.5">Em breve na</p>
          <p className="text-ds-text-primary font-bold text-sm leading-none">App Store</p>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {}}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-ds-surface border border-ds-border backdrop-blur-sm cursor-default"
      aria-label="Baixar o CardTroca no Google Play"
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4CAF50" d="M1.22 0C.89.01.56.1.32.36.11.62 0 .98 0 1.32v21.36c0 .34.11.7.32.96.24.26.57.35.9.36l.12-.01L12 13.01 1.22 0z"/>
        <path fill="#FFD600" d="M16.28 9.27L4.03.13 4 .12C3.68-.04 3.3-.04 3 .12L12 10.97l4.28-1.7z"/>
        <path fill="#F44336" d="M21.8 10.05c-.45-.31-1.04-.31-1.5 0l-3.02 1.9L13 12l4.28 4.7 3.02 1.9c.46.31 1.05.31 1.5 0C22.42 18.28 22 17.26 22 12s.42-6.28-.2-1.95z"/>
        <path fill="#4CAF50" d="M1.22 24c.33.01.66-.1.9-.36L12 12.99l-10.66 9.65-.12-.01c-.33-.01-.66-.1-.9-.36C.11 22.02 0 21.66 0 21.32v.36c0 .34.11.7.32.96.24.26.57.35.9.36z"/>
      </svg>
      <div className="text-left">
        <p className="text-ds-text-secondary text-[10px] font-medium leading-none mb-0.5">Em breve no</p>
        <p className="text-ds-text-primary font-bold text-sm leading-none">Google Play</p>
      </div>
    </button>
  );
}
