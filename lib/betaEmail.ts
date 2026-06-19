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
  const logoUrl = "https://cardtroca.com/logo.png";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bem-vindo ao Beta do CardTroca!</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F6F8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F6F8;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color:#0E9384;border-radius:16px 16px 0 0;padding:36px 40px 28px;">
              <img
                src="${logoUrl}"
                alt="CardTroca"
                width="200"
                style="display:block;max-width:200px;height:auto;margin-bottom:0;"
              />
              <p style="margin:10px 0 0;color:#ffffff;font-size:15px;letter-spacing:0.5px;opacity:0.9;">
                A plataforma definitiva para colecionadores TCG
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">

              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#11161D;">
                Olá! Tudo bem?
              </p>

              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#11161D;">
                Sua inscrição no <strong style="color:#0E9384;">Beta do CardTroca</strong> foi confirmada com sucesso! Ficamos muito felizes em ter você como um dos primeiros a testar a plataforma.
              </p>

              <p style="margin:0 0 32px;font-size:16px;line-height:1.7;color:#11161D;">
                Em breve você receberá um convite para o nosso <strong>grupo exclusivo de Beta no WhatsApp</strong>, onde compartilharemos as instruções de acesso, atualizações e tudo que você precisa saber para começar.
              </p>

              <!-- INFO BOX -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background-color:#E6F6F4;border-radius:12px;padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#0E9384;">O que vem por aí:</p>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;font-size:16px;">🎁</td>
                              <td style="padding-left:8px;font-size:14px;line-height:1.6;color:#11161D;vertical-align:top;">
                                <strong>30 créditos de bônus</strong> na sua carteira ao ativar o app (garantido para os primeiros 50 inscritos)
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;font-size:16px;">📲</td>
                              <td style="padding-left:8px;font-size:14px;line-height:1.6;color:#11161D;vertical-align:top;">
                                Acesso antecipado ao CardTroca antes do lançamento oficial
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;font-size:16px;">💬</td>
                              <td style="padding-left:8px;font-size:14px;line-height:1.6;color:#11161D;vertical-align:top;">
                                Canal direto com o time para sugerir funcionalidades e reportar bugs
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- DIVIDER -->
              <hr style="border:none;border-top:1px solid #DDE2E8;margin:32px 0;" />

              <p style="margin:0 0 8px;font-size:16px;line-height:1.7;color:#11161D;">
                Enquanto isso, nos siga no Instagram para ficar por dentro de tudo:
              </p>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 0;">
                <tr>
                  <td align="center">
                    <a href="https://www.instagram.com/cardtroca/"
                       style="display:inline-block;background-color:#0E9384;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:14px 40px;border-radius:12px;letter-spacing:0.3px;">
                      Seguir @cardtroca
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="background-color:#F4F6F8;border-radius:0 0 16px 16px;padding:24px 40px;">
              <p style="margin:0;font-size:13px;color:#586572;line-height:1.6;">
                Você está recebendo este e-mail porque se inscreveu no Beta do CardTroca com o endereço ${email}.<br/>
                <a href="https://cardtroca.com" style="color:#0E9384;text-decoration:none;">cardtroca.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
