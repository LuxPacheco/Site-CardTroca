import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "/#funcionalidades" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Sistema de Match", href: "/#match" },
    { label: "Planos", href: "/#planos" },
  ],
  suporte: [
    { label: "Central de ajuda", href: "/central-de-ajuda" },
    { label: "Politica de privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de uso", href: "/termos-de-uso" },
  ],
  comunidade: [
    { label: "Instagram", href: "https://www.instagram.com/cardtroca" },
  ],
};

export function Footer() {
  const renderLink = (link: { label: string; href: string }) => {
    const className = "text-sm text-ds-text-secondary hover:text-ds-text-primary transition-colors duration-200";

    if (link.href.startsWith("http")) {
      return (
        <a href={link.href} target="_blank" rel="noreferrer" className={className}>
          {link.label}
        </a>
      );
    }

    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  };

  return (
    <footer
      className="border-t border-ds-border bg-ds-bg-secondary"
      aria-label="Rodapé"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-2.5"
              aria-label="CardTroca — Início"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden bg-white"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <span className="font-bold text-ds-text-primary text-lg">CardTroca</span>
            </a>
            <p className="text-ds-text-secondary text-sm leading-relaxed max-w-xs">
              A plataforma definitiva para colecionadores TCG.
            </p>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-ds-text-tertiary">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Em desenvolvimento ativo
              </span>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold text-ds-text-primary text-sm mb-4 uppercase tracking-wider">
              Produto
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-ds-text-primary text-sm mb-4 uppercase tracking-wider">
              Suporte
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidade */}
          <div>
            <h3 className="font-semibold text-ds-text-primary text-sm mb-4 uppercase tracking-wider">
              Comunidade
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.comunidade.map((link) => (
                <li key={link.label}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ds-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ds-text-tertiary">
            © {new Date().getFullYear()} CardTroca. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ds-text-tertiary">
            Feito com cuidado para colecionadores
          </p>
        </div>
      </div>
    </footer>
  );
}
