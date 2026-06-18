"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, AlertCircle, Loader2, ArrowLeft, Gift, Users, Zap, Phone, Instagram, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Platform = "ios" | "android" | "";
type Status = "idle" | "loading" | "success" | "error";

const TOTAL_SPOTS = 50;

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 11;
}

export function BetaForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [platform, setPlatform] = useState<Platform>("");
  const [whatsappAgreed, setWhatsappAgreed] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [position, setPosition] = useState<number | null>(null);
  const [isClosed, setIsClosed] = useState(false);
  const [signupCount, setSignupCount] = useState(0);

  useEffect(() => {
    fetch("/api/beta")
      .then((r) => r.json())
      .then((data) => {
        setIsClosed(data.isClosed ?? false);
        setSignupCount(data.count ?? 0);
      })
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !phone || !isValidPhone(phone) || !platform || !whatsappAgreed || !dataConsent) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          platform,
          whatsapp_agreed: whatsappAgreed,
          data_consent: dataConsent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Erro ao enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setPosition(data.position ?? null);
      setStatus("success");
    } catch {
      setErrorMsg("Erro de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  }

  // Beta encerrado
  if (isClosed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #586572, #3a4450)" }}
          >
            <XCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black text-ds-text-primary mb-3">
            Beta encerrado
          </h1>
          <p className="text-ds-text-secondary text-lg leading-relaxed mb-8">
            As {TOTAL_SPOTS} vagas do Beta foram preenchidas. Fique atento ao lançamento oficial do CardTroca!
          </p>
          <a
            href="https://www.instagram.com/cardtroca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-white text-base transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)" }}
          >
            <Instagram className="w-5 h-5" />
            Seguir @cardtroca no Instagram
          </a>
          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-ds-text-tertiary hover:text-ds-text-secondary transition-colors"
            >
              ← Voltar para o início
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, var(--color-primary-hover), var(--color-primary))" }}
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black text-ds-text-primary mb-3">
            Você está dentro! 🎉
          </h1>

          {position !== null && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mb-6"
            >
              <p className="text-ds-text-secondary text-base mb-2">Você é o inscrito</p>
              <div
                className="inline-flex items-baseline gap-1 px-6 py-3 rounded-2xl"
                style={{ background: "color-mix(in srgb, var(--color-primary) 12%, transparent)", border: "2px solid var(--color-primary)" }}
              >
                <span className="text-6xl font-black" style={{ color: "var(--color-primary)" }}>
                  #{position}
                </span>
                <span className="text-ds-text-secondary text-lg font-semibold">
                  &nbsp;de {TOTAL_SPOTS}
                </span>
              </div>
              <p className="text-ds-text-secondary text-sm mt-3">
                Parabéns! Você garante os <strong className="text-ds-text-primary">30 créditos de bônus</strong> na sua carteira.
              </p>
            </motion.div>
          )}

          <p className="text-ds-text-secondary text-base leading-relaxed mb-6">
            Sua inscrição foi confirmada. Entraremos em contato com os próximos passos para acesso ao Beta.
          </p>
          <div className="bg-ds-surface border border-ds-border rounded-2xl p-5 mb-8 text-left">
            <div className="flex items-center gap-3 text-primary font-semibold mb-1">
              <Gift className="w-5 h-5 flex-shrink-0" />
              Lembrete importante
            </div>
            <p className="text-ds-text-secondary text-sm">
              Se você estiver entre os primeiros <strong className="text-ds-text-primary">50 inscritos</strong>, receberá <strong className="text-ds-text-primary">30 créditos adicionais</strong> automaticamente na sua carteira ao ativar o app.
            </p>
          </div>
          <Link href="/">
            <Button variant="secondary" icon={<ArrowLeft className="w-4 h-4" />}>
              Voltar para o início
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  const phoneDigits = phone.replace(/\D/g, "");
  const showPhoneError = phoneTouched && phone.length > 0 && !isValidPhone(phone);
  const spotsLeft = Math.max(0, TOTAL_SPOTS - signupCount);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ds-text-secondary hover:text-ds-text-primary transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wide">Acesso Beta</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-black text-ds-text-primary leading-tight mb-3">
              Seja um dos primeiros a testar o CardTroca
            </h1>
            <p className="text-ds-text-secondary text-base leading-relaxed mb-8">
              Ajude a moldar o futuro da plataforma, encontre bugs e sugira funcionalidades antes de todo mundo.
            </p>

            {/* Benefit cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: Gift, label: "30 créditos", sub: "para os primeiros 50" },
                { icon: Zap, label: "Acesso antecipado", sub: "antes do lançamento" },
                { icon: Users, label: "Comunidade", sub: "grupo exclusivo" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-ds-surface border border-ds-border rounded-xl p-3 text-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-ds-text-primary text-xs font-semibold leading-tight">{label}</p>
                  <p className="text-ds-text-tertiary text-[11px] leading-tight mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* Spots remaining callout */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3 flex items-center gap-3 mb-8">
              <Gift className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-sm text-ds-text-secondary">
                <strong className="text-ds-text-primary">{spotsLeft} {spotsLeft === 1 ? "vaga restante" : "vagas restantes"} com bônus de 30 créditos.</strong>{" "}
                Inscreva-se agora para garantir o seu.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-ds-text-primary mb-1.5"
                >
                  E-mail da loja de apps
                </label>
                <p className="text-xs text-ds-text-tertiary mb-2">
                  Use o mesmo e-mail da App Store ou Google Play para garantirmos o acesso.
                </p>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ds-surface border border-ds-border text-ds-text-primary placeholder:text-ds-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-ds-text-primary mb-1.5"
                >
                  WhatsApp
                </label>
                <p className="text-xs text-ds-text-tertiary mb-2">
                  Número que receberá o convite para o grupo do Beta.
                </p>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ds-text-tertiary" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    onBlur={() => setPhoneTouched(true)}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl bg-ds-surface border text-ds-text-primary placeholder:text-ds-text-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm ${
                      showPhoneError
                        ? "border-red-400 focus:ring-red-400"
                        : "border-ds-border focus:ring-primary"
                    }`}
                  />
                </div>
                {showPhoneError && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    Informe um celular com DDD e 9 dígitos — ex: (11) 99999-9999
                    {phoneDigits.length > 0 && ` (${phoneDigits.length}/11 dígitos)`}
                  </p>
                )}
              </div>

              {/* Platform */}
              <div>
                <label className="block text-sm font-semibold text-ds-text-primary mb-1.5">
                  Qual dispositivo você usa?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["ios", "android"] as const).map((p) => {
                    const selected = platform === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPlatform(p)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                          selected
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-ds-surface border-ds-border text-ds-text-secondary hover:border-ds-border-strong"
                        }`}
                      >
                        <Smartphone className="w-4 h-4 flex-shrink-0" />
                        {p === "ios" ? "iPhone (iOS)" : "Android"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <input
                    id="whatsapp"
                    type="checkbox"
                    checked={whatsappAgreed}
                    onChange={(e) => setWhatsappAgreed(e.target.checked)}
                    required
                    className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-md border-2 border-ds-border-strong accent-primary cursor-pointer"
                  />
                  <div>
                    <label htmlFor="whatsapp" className="text-sm text-ds-text-secondary leading-relaxed cursor-pointer">
                      Aceito entrar no grupo do WhatsApp do Beta do CardTroca para receber atualizações e participar da comunidade.
                    </label>
                    <p className="text-xs text-ds-text-tertiary mt-1">
                      Você receberá o convite em até 24h após a inscrição.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <input
                    id="dataconsent"
                    type="checkbox"
                    checked={dataConsent}
                    onChange={(e) => setDataConsent(e.target.checked)}
                    required
                    className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-md border-2 border-ds-border-strong accent-primary cursor-pointer"
                  />
                  <label htmlFor="dataconsent" className="text-sm text-ds-text-secondary leading-relaxed cursor-pointer">
                    Concordo em compartilhar meu e-mail e dispositivo com o CardTroca para fins de participação no Beta, conforme a{" "}
                    <Link href="/politica-de-privacidade" className="text-primary underline underline-offset-2 hover:text-primary/80">
                      Política de Privacidade
                    </Link>{" "}
                    e os{" "}
                    <Link href="/termos-de-uso" className="text-primary underline underline-offset-2 hover:text-primary/80">
                      Termos de Uso
                    </Link>
                    .
                  </label>
                </div>
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={status === "loading"}
                disabled={!email || !phone || !isValidPhone(phone) || !platform || !whatsappAgreed || !dataConsent || status === "loading"}
                icon={status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : undefined}
              >
                {status === "loading" ? "Enviando..." : "Quero participar do Beta"}
              </Button>

              <p className="text-center text-xs text-ds-text-tertiary">
                Sem spam. Você pode cancelar a qualquer momento.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
