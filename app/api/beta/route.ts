import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { buildBetaEmail } from "@/lib/betaEmail";
import nodemailer from "nodemailer";

const VALID_PLATFORMS = ["ios", "android"];
const MAX_SPOTS = 50;

// Simple in-memory rate limiter (resets on cold start — sufficient for this use case)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;       // max requests
const RATE_WINDOW_MS = 60_000; // per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === 11;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "contato@cardtroca.com",
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

async function sendConfirmationEmail(email: string) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: '"CardTroca" <contato@cardtroca.com>',
    to: email,
    subject: "Sua inscrição no Beta do CardTroca foi confirmada!",
    html: buildBetaEmail(email),
  });
}

export async function GET() {
  const { count, error } = await supabase
    .from("beta_signups")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ error: "Erro ao consultar vagas." }, { status: 500 });
  }

  return NextResponse.json({ count: count ?? 0, isClosed: (count ?? 0) >= MAX_SPOTS });
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um momento e tente novamente." },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { email, phone, platform, whatsapp_agreed, data_consent } = body;

  // Strict presence and type checks
  if (!email || !phone || !platform || whatsapp_agreed !== true || data_consent !== true) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  // Input length limits
  if (
    typeof email !== "string" || email.length > 254 ||
    typeof phone !== "string" || phone.length > 20 ||
    typeof platform !== "string"
  ) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Telefone inválido. Informe DDD + 9 dígitos." }, { status: 400 });
  }

  if (!VALID_PLATFORMS.includes(platform)) {
    return NextResponse.json({ error: "Plataforma inválida." }, { status: 400 });
  }

  // Check if spots are still available
  const { count: currentCount } = await supabase
    .from("beta_signups")
    .select("*", { count: "exact", head: true });

  if ((currentCount ?? 0) >= MAX_SPOTS) {
    return NextResponse.json({ error: "As vagas do Beta foram preenchidas." }, { status: 409 });
  }

  const { error } = await supabase.from("beta_signups").insert({
    email: email.toLowerCase().trim(),
    phone: phone.trim(),
    platform,
    whatsapp_agreed,
    data_consent,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Este e-mail já está inscrito no Beta." }, { status: 409 });
    }
    console.error("Supabase error:", error);
    return NextResponse.json({ error: "Erro ao salvar inscrição. Tente novamente." }, { status: 500 });
  }

  // Get position after insert
  const { count: newCount } = await supabase
    .from("beta_signups")
    .select("*", { count: "exact", head: true });

  const position = newCount ?? (currentCount ?? 0) + 1;

  try {
    await sendConfirmationEmail(email.toLowerCase().trim());
  } catch (emailError) {
    console.error("Erro ao enviar e-mail:", emailError);
    // Não falha a inscrição se o e-mail falhar
  }

  return NextResponse.json({ success: true, position });
}
