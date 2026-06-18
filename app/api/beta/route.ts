import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { buildBetaEmail } from "@/lib/betaEmail";
import nodemailer from "nodemailer";

const VALID_PLATFORMS = ["ios", "android"];

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

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, phone, platform, whatsapp_agreed, data_consent } = body;

  if (!email || !phone || !platform || !whatsapp_agreed || !data_consent) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  if (!VALID_PLATFORMS.includes(platform)) {
    return NextResponse.json({ error: "Plataforma inválida." }, { status: 400 });
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

  try {
    await sendConfirmationEmail(email.toLowerCase().trim());
  } catch (emailError) {
    console.error("Erro ao enviar e-mail:", emailError);
    // Não falha a inscrição se o e-mail falhar
  }

  return NextResponse.json({ success: true });
}
