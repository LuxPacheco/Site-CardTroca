"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { AppDownloadButton } from "@/components/AppDownloadButton";
import { cn } from "@/lib/utils";
import {
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/funcionalidades", label: "Funcionalidades" },
];

export function Navigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-out",
          scrolled
            ? "glass border-b border-ds-border shadow-elevation-1"
            : "bg-transparent"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Navegação principal"
        >
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="CardTroca — Início"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-primary-glow flex-shrink-0 overflow-hidden bg-white"
              >
                <Image
                  src="/splash_logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                  priority
                  unoptimized
                />
              </div>
              <span className="font-bold text-ds-text-primary text-lg tracking-tight hidden sm:block">
                CardTroca
              </span>
            </a>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium",
                      "text-ds-text-secondary hover:text-ds-text-primary",
                      "hover:bg-ds-bg-tertiary",
                      "transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center",
                  "text-ds-text-secondary hover:text-ds-text-primary",
                  "hover:bg-ds-bg-tertiary",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
                aria-label={resolvedTheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* CTA */}
              <AppDownloadButton
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              />

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center lg:hidden",
                  "text-ds-text-secondary hover:text-ds-text-primary",
                  "hover:bg-ds-bg-tertiary",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                )}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-72 glass-strong border-l border-ds-border p-6 pt-20 animate-slide-up">
            <nav aria-label="Menu mobile">
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 rounded-xl text-base font-medium text-ds-text-secondary hover:text-ds-text-primary hover:bg-ds-bg-tertiary transition-all duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-ds-border">
                <AppDownloadButton variant="primary" size="md" fullWidth />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
