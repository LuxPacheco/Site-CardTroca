import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade | CardTroca",
  description: "Política de Privacidade do CardTroca.",
};

const sections = [
  {
    title: "Dados que coletamos",
    content:
      "Podemos coletar nome, e-mail, localização aproximada, fotos de cartas, histórico de negociações, mensagens de chat, dados de anúncios, preferências de busca e informações necessárias para pagamentos, créditos e assinaturas.",
  },
  {
    title: "Como usamos seus dados",
    content:
      "Usamos seus dados para conectar usuários próximos, exibir cartas anunciadas, calcular referências de valor, operar chats, lista de desejos, modo troca, avaliações, créditos, pagamentos, segurança da plataforma e melhoria do serviço.",
  },
  {
    title: "Compartilhamento",
    content:
      "Não vendemos seus dados pessoais. Compartilhamos informações apenas com provedores essenciais para operação do serviço, como infraestrutura, mapas, pagamentos, autenticação, armazenamento e ferramentas de comunicação.",
  },
  {
    title: "Localização",
    content:
      "Usamos localização para exibir cartas próximas, filtrar anúncios por distância e melhorar o modo troca. O CardTroca armazena e exibe apenas informações aproximadas, como cidade e estado, e não publica seu endereço exato.",
  },
  {
    title: "Mensagens e negociações",
    content:
      "Mensagens de chat e histórico de negociações podem ser mantidos para permitir conversas entre usuários, encerramento de negociações, avaliações, moderação, segurança e prevenção de fraude.",
  },
  {
    title: "Seus direitos pela LGPD",
    content:
      "Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento pelo e-mail contato@cardtroca.com. Algumas informações podem ser mantidas pelo período necessário para cumprimento legal, segurança ou prevenção de fraude.",
  },
  {
    title: "Retenção de dados",
    content:
      "Dados de conta são mantidos enquanto a conta existir. Após exclusão, os dados são removidos em até 30 dias, exceto quando houver necessidade de preservação por obrigação legal, segurança da plataforma ou resolução de disputas.",
  },
  {
    title: "Suporte",
    content:
      "Para dúvidas sobre privacidade ou tratamento de dados, entre em contato pelo e-mail contato@cardtroca.com.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      updated="Maio de 2026"
      intro="Como o CardTroca coleta, usa e protege dados durante o uso da plataforma."
      sections={sections}
    />
  );
}
