import Link from "next/link";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated?: string;
  intro?: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-ds-bg text-ds-text-primary">
      <section className="relative overflow-hidden border-b border-ds-border bg-ds-bg-secondary pt-28 pb-14">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(14,147,132,0.14) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-primary hover:text-primary-700 mb-8"
          >
            Voltar para o site
          </Link>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            {title}
          </h1>
          {updated && (
            <p className="text-sm text-ds-text-tertiary mt-4">
              Ultima atualizacao: {updated}
            </p>
          )}
          {intro && (
            <p className="text-lg text-ds-text-secondary leading-relaxed mt-6 max-w-3xl">
              {intro}
            </p>
          )}
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-ds-border bg-ds-surface p-6 shadow-elevation-1"
              >
                <h2 className="text-xl font-bold text-ds-text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-ds-text-secondary leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
