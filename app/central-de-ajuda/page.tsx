import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Central de Ajuda | CardTroca",
  description: "Central de ajuda e manual do aplicativo CardTroca.",
};

const sections = [
  {
    title: "O que e o CardTroca?",
    content:
      "O CardTroca e um app para colecionadores de TCG anunciarem, comprarem, venderem e trocarem cartas entre si. Voce cadastra sua biblioteca, encontra colecionadores proximos e negocia diretamente pelo chat. A base atual esta preparada para cartas Pokemon TCG.",
  },
  {
    title: "Creditos e Pro",
    content:
      "No modo Creditos, algumas acoes consomem creditos comprados em pacotes ou obtidos por recompensas. Os creditos nao expiram. No Pro, chats, matches, anuncios e destaques ficam liberados conforme as regras do plano ativo.",
  },
  {
    title: "Busca de cartas e Lista de Desejos",
    content:
      "A busca possui catalogo e cartas a venda. No catalogo, pesquise pelo nome da carta ou codigo. Em cartas a venda, use filtros de distancia, condicao, preco, avaliacao e recentes. A Lista de Desejos permite salvar cartas que voce procura e usar essas preferencias no app.",
  },
  {
    title: "Adicionar e anunciar cartas",
    content:
      "Para adicionar uma carta, informe o codigo, selecione o resultado correto e preencha idioma, condicao, disponibilidade, preco, observacoes e dados de graduacao quando houver. Ao criar anuncio, podem ser consumidos creditos, incluindo creditos extras caso voce escolha destaque.",
  },
  {
    title: "Modo Troca",
    content:
      "No modo troca, escolha o que voce quer receber, selecione uma carta sua para oferecer e defina a distancia maxima. Depois, veja ofertas compativeis e sinalize interesse. Quando dois usuarios demonstram interesse, acontece o match e o chat pode ser aberto para negociacao.",
  },
  {
    title: "Destaques e cartas proximas",
    content:
      "A tela inicial mostra destaques e cartas proximas de voce. As cartas proximas usam sua localizacao aproximada ou cidade cadastrada. Os destaques ajudam anuncios a aparecerem com mais visibilidade nas areas certas do app.",
  },
  {
    title: "Sistema de avaliacao",
    content:
      "Ao encerrar uma negociacao, o usuario pode indicar se houve negocio ou nao. Com negocio, a contagem de trocas ou vendas e atualizada no perfil e uma avaliacao pode ser registrada. Chats encerrados ficam arquivados na lista de conversas.",
  },
  {
    title: "Seguranca em encontros",
    content:
      "Ao combinar uma troca ou venda presencial, prefira locais publicos, movimentados e seguros. Confira a carta, estado, idioma, preco e reputacao do outro usuario antes de concluir a negociacao.",
  },
  {
    title: "Suporte",
    content:
      "Para suporte, privacidade ou duvidas sobre a conta, envie uma mensagem para contato@cardtroca.com.",
  },
];

export default function HelpPage() {
  return (
    <LegalPage
      eyebrow="Ajuda"
      title="Central de Ajuda"
      intro="Perguntas frequentes e manual resumido das principais areas do CardTroca."
      sections={sections}
    />
  );
}
