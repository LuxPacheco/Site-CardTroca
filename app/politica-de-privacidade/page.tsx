import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politica de Privacidade | CardTroca",
  description: "Politica de Privacidade do CardTroca.",
};

const sections = [
  {
    title: "Dados que coletamos",
    content:
      "Podemos coletar nome, e-mail, localizacao aproximada, fotos de cartas, historico de negociacoes, mensagens de chat, dados de anuncios, preferencias de busca e informacoes necessarias para pagamentos, creditos e assinaturas.",
  },
  {
    title: "Como usamos seus dados",
    content:
      "Usamos seus dados para conectar usuarios proximos, exibir cartas anunciadas, calcular referencias de valor, operar chats, lista de desejos, modo troca, avaliacoes, creditos, pagamentos, seguranca da plataforma e melhoria do servico.",
  },
  {
    title: "Compartilhamento",
    content:
      "Nao vendemos seus dados pessoais. Compartilhamos informacoes apenas com provedores essenciais para operacao do servico, como infraestrutura, mapas, pagamentos, autenticacao, armazenamento e ferramentas de comunicacao.",
  },
  {
    title: "Localizacao",
    content:
      "Usamos localizacao para exibir cartas proximas, filtrar anuncios por distancia e melhorar o modo troca. O CardTroca armazena e exibe apenas informacoes aproximadas, como cidade e estado, e nao publica seu endereco exato.",
  },
  {
    title: "Mensagens e negociacoes",
    content:
      "Mensagens de chat e historico de negociacoes podem ser mantidos para permitir conversas entre usuarios, encerramento de negociacoes, avaliacoes, moderacao, seguranca e prevencao de fraude.",
  },
  {
    title: "Seus direitos pela LGPD",
    content:
      "Voce pode solicitar acesso, correcao ou exclusao dos seus dados pessoais a qualquer momento pelo e-mail contato@cardtroca.com. Algumas informacoes podem ser mantidas pelo periodo necessario para cumprimento legal, seguranca ou prevencao de fraude.",
  },
  {
    title: "Retencao de dados",
    content:
      "Dados de conta sao mantidos enquanto a conta existir. Apos exclusao, os dados sao removidos em ate 30 dias, exceto quando houver necessidade de preservacao por obrigacao legal, seguranca da plataforma ou resolucao de disputas.",
  },
  {
    title: "Suporte",
    content:
      "Para duvidas sobre privacidade ou tratamento de dados, entre em contato pelo e-mail contato@cardtroca.com.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Politica de Privacidade"
      updated="Maio de 2026"
      intro="Como o CardTroca coleta, usa e protege dados durante o uso da plataforma."
      sections={sections}
    />
  );
}
