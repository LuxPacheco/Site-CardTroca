function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildBetaEmail(rawEmail: string): string {
  const email = escapeHtml(rawEmail);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Sua inscrição no Beta do CardTroca foi confirmada!</title>
  <style>
    :root { color-scheme: dark; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #0D0D0D !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    @media (prefers-color-scheme: light) {
      body { background-color: #0D0D0D !important; }
      .wrapper { background: #111111 !important; border-color: #222222 !important; }
      .logo-bar { background: #111111 !important; }
      .hero { background: #0B0D10 !important; }
      .body-section { background: #111111 !important; }
      .feature-row { background: #161616 !important; border-color: #1E1E1E !important; }
      .footer { background: #0B0D10 !important; }
      .greeting { color: #FFFFFF !important; }
      .text { color: #9CA3AF !important; }
      .features-label { color: #4B5563 !important; }
      .feature-title { color: #FFFFFF !important; }
      .feature-desc { color: #6B7280 !important; }
      .divider { border-color: #1E1E1E !important; }
    }
    .wrapper { max-width: 560px; margin: 32px auto; background: #111111; border-radius: 20px; overflow: hidden; border: 1px solid #222222; }
    .logo-bar { background: #111111; padding: 24px 32px 16px; text-align: center; border-bottom: 1px solid #1E1E1E; }
    .logo-text { font-size: 28px; font-weight: 800; letter-spacing: -1px; line-height: 1; }
    .logo-text .card { color: #FFFFFF; }
    .logo-text .troca { color: #14B8A6; }
    .hero { background: #0B0D10; padding: 44px 32px 48px; text-align: center; position: relative; }
    .hero-accent { position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 300px; height: 300px; background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%); pointer-events: none; }
    .beta-tag { display: inline-block; border: 1.5px solid #14B8A6; color: #14B8A6; font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; padding: 5px 16px; border-radius: 100px; margin-bottom: 20px; }
    .hero-headline { font-size: 32px; font-weight: 800; color: #FFFFFF; line-height: 1.15; letter-spacing: -0.8px; }
    .hero-headline .highlight { color: #14B8A6; }
    .hero-sub { font-size: 15px; color: #6B7280; margin-top: 14px; line-height: 1.6; }
    .body-section { padding: 36px 32px; }
    .greeting { font-size: 19px; font-weight: 700; color: #FFFFFF; }
    .text { font-size: 15px; color: #9CA3AF; line-height: 1.7; margin-top: 12px; }
    .text strong { color: #E5E7EB; }
    .divider { border: none; border-top: 1px solid #1E1E1E; margin: 28px 0; }
    .features-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #4B5563; margin-bottom: 14px; }
    .feature-row { background: #161616; border: 1px solid #1E1E1E; border-radius: 12px; padding: 16px 18px; margin-bottom: 10px; }
    .feature-row table { width: 100%; border-collapse: collapse; }
    .feature-icon { width: 40px; vertical-align: middle; }
    .feature-icon-box { width: 36px; height: 36px; background: #0D1F1E; border-radius: 9px; text-align: center; line-height: 36px; font-size: 18px; border: 1px solid rgba(20,184,166,0.13); }
    .feature-content { vertical-align: middle; padding-left: 14px; }
    .feature-title { font-size: 14px; font-weight: 700; color: #FFFFFF; }
    .feature-desc { font-size: 13px; color: #6B7280; margin-top: 2px; line-height: 1.4; }
    .urgency { background: linear-gradient(135deg, #0B7568 0%, #14B8A6 100%); padding: 28px 32px; text-align: center; }
    .urgency-label { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.7); }
    .urgency-main { font-size: 20px; font-weight: 800; color: #FFFFFF; margin-top: 6px; letter-spacing: -0.3px; }
    .urgency-sub { font-size: 14px; color: rgba(255,255,255,0.75); margin-top: 6px; line-height: 1.5; }
    .footer { background: #0B0D10; padding: 24px 32px; text-align: center; }
    .footer p { font-size: 12px; color: #374151; line-height: 1.8; }
    .footer a { color: #4B5563; text-decoration: none; }
    @media (max-width: 480px) {
      .wrapper { margin: 0; border-radius: 0; border: none; }
      .body-section { padding: 28px 20px; }
      .hero { padding: 36px 20px 40px; }
      .logo-bar { padding: 20px 20px 14px; }
      .hero-headline { font-size: 26px; }
      .urgency { padding: 24px 20px; }
    }
  </style>
</head>
<body>
  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Inscrição confirmada! Aguarde o convite para o grupo — você vai adorar o que está por vir. 🎉
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <div class="wrapper">

    <!-- Logo -->
    <div class="logo-bar">
      <div class="logo-text"><span class="card">Card</span><span class="troca">Troca</span></div>
    </div>

    <!-- Hero -->
    <div class="hero">
      <div class="hero-accent"></div>
      <div class="beta-tag">✅ Inscrição confirmada</div>
      <div class="hero-headline">
        Você está dentro do<br/>
        <span class="highlight">Beta do CardTroca!</span>
      </div>
      <p class="hero-sub">
        Sua vaga está garantida. Em breve você receberá<br/>
        o convite para o grupo exclusivo no WhatsApp.
      </p>
    </div>

    <!-- Body -->
    <div class="body-section">
      <div class="greeting">Olá! 👋</div>

      <p class="text">
        Sua inscrição no <strong>Beta do CardTroca</strong> foi confirmada com sucesso. Ficamos muito felizes em ter você como um dos primeiros a testar a plataforma.
      </p>
      <p class="text">
        Assim que as <strong>50 vagas</strong> forem preenchidas, você receberá um convite para o nosso grupo exclusivo no <strong>WhatsApp</strong>, onde compartilharemos as instruções de acesso e tudo que você precisa saber para começar.
      </p>

      <hr class="divider" />

      <div class="features-label">O que vem por aí</div>

      <div class="feature-row">
        <table role="presentation">
          <tr>
            <td class="feature-icon"><div class="feature-icon-box">🎁</div></td>
            <td class="feature-content">
              <div class="feature-title">30 créditos de bônus</div>
              <div class="feature-desc">Creditados automaticamente na sua carteira ao ativar o app — garantido para os primeiros 50 inscritos.</div>
            </td>
          </tr>
        </table>
      </div>

      <div class="feature-row">
        <table role="presentation">
          <tr>
            <td class="feature-icon"><div class="feature-icon-box">📲</div></td>
            <td class="feature-content">
              <div class="feature-title">Acesso antecipado</div>
              <div class="feature-desc">Teste o CardTroca antes do lançamento oficial para Android e iOS.</div>
            </td>
          </tr>
        </table>
      </div>

      <div class="feature-row">
        <table role="presentation">
          <tr>
            <td class="feature-icon"><div class="feature-icon-box">💬</div></td>
            <td class="feature-content">
              <div class="feature-title">Canal direto com o time</div>
              <div class="feature-desc">Sugira funcionalidades, reporte bugs e ajude a moldar o futuro da plataforma.</div>
            </td>
          </tr>
        </table>
      </div>

    </div>

    <!-- Urgency / CTA -->
    <div class="urgency">
      <div class="urgency-label">Enquanto espera</div>
      <div class="urgency-main">Nos siga no Instagram 📸</div>
      <p class="urgency-sub">Fique por dentro das novidades e do lançamento.</p>
      <table cellpadding="0" cellspacing="0" border="0" style="margin:16px auto 0;">
        <tr>
          <td bgcolor="#0B0D10" style="border-radius:10px;background:#0B0D10;">
            <a href="https://www.instagram.com/cardtroca/" style="display:inline-block;padding:12px 36px;color:#FFFFFF;font-size:14px;font-weight:800;text-decoration:none;letter-spacing:0.2px;border-radius:10px;">@cardtroca</a>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>
        Você está recebendo este e-mail porque se inscreveu no Beta do CardTroca com o endereço <strong>${email}</strong>.<br/>
        <a href="https://cardtroca.com">cardtroca.com</a> &middot; <a href="mailto:contato@cardtroca.com">contato@cardtroca.com</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}
