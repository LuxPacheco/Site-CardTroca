import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, platform, whatsapp_agreed, data_consent } = body;

  if (!email || !platform || !whatsapp_agreed || !data_consent) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const { error } = await supabase.from("beta_signups").insert({
    email: email.toLowerCase().trim(),
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

  return NextResponse.json({ success: true });
}
