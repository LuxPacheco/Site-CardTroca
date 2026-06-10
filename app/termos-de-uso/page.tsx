import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso | CardTroca",
  description: "Termos de Uso do CardTroca.",
};

const sections = [
  {
    title: "1. Aceitacao dos Termos",
    content:
      "Ao usar o CardTroca, voce concorda com estes Termos de Uso. Leia-os atentamente antes de criar uma conta, anunciar cartas, comprar, vender, trocar ou conversar com outros usuarios.",
  },
  {
    title: "2. Servico",
    content:
      "O CardTroca e uma plataforma de marketplace para compra, venda e troca de cartas TCG entre usuarios. A base atual esta preparada para cartas Pokemon TCG. O app organiza anuncios, busca, lista de desejos, modo troca, chats e reputacao, mas nao e parte das negociacoes, produtos ou encontros entre usuarios.",
  },
  {
    title: "3. Responsabilidade do usuario",
    content:
      "Voce e responsavel pela veracidade dos dados cadastrados, pela seguranca da sua conta, pelas condutas realizadas durante encontros e pelas negociacoes feitas pelo app. Antes de concluir qualquer troca ou venda, confira a carta, a condicao, o idioma, o preco e as informacoes do outro usuario.",
  },
  {
    title: "4. Creditos e pagamentos",
    content:
      "Creditos podem ser usados para acoes especificas, como criar anuncios, abrir chats e destacar cartas. Creditos adquiridos nao sao reembolsaveis apos consumo. Assinaturas Pro sao renovadas automaticamente ate cancelamento pela loja de aplicativos correspondente.",
  },
  {
    title: "5. Seguranca",
    content:
      "O CardTroca recomenda fortemente que encontros presenciais sejam realizados em locais publicos e seguros. O app nao se responsabiliza por incidentes ocorridos durante encontros ou negociacoes realizadas fora da plataforma.",
  },
  {
    title: "6. Moderacao",
    content:
      "Reservamos o direito de suspender contas que violem estes termos, pratiquem fraudes, publiquem informacoes falsas, tenham comportamento abusivo ou coloquem outros usuarios em risco.",
  },
  {
    title: "7. Suporte",
    content:
      "Para assuntos relacionados aos termos, privacidade ou suporte, entre em contato pelo e-mail contato@cardtroca.com.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Termos"
      title="Termos de Uso"
      updated="Maio de 2026"
      intro="Regras de uso da plataforma CardTroca para compra, venda e troca de cartas TCG entre colecionadores."
      sections={sections}
    />
  );
}
