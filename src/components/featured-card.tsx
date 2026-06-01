import { ArrowUpRight, FileText, GitHub, Lock } from "@/components/icons";
import { TechIcon } from "@/components/tech-icons";
import { FEATURED } from "@/data/projects";

export function FeaturedCard() {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface lg:flex-row">
      <div className="relative flex shrink-0 flex-col overflow-hidden bg-surface2 lg:w-[600px]">
        <div className="flex items-center gap-3.5 border-b border-line px-4 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-bg px-3 py-1.5">
            <Lock className="h-3 w-3 shrink-0 text-faint" aria-hidden />
            <span className="truncate text-xs font-medium text-muted">
              second-brain-2026.vercel.app
            </span>
          </div>
        </div>

        <p className="sr-only">
          Demonstração ilustrativa do produto Segundo Cérebro: um chat onde o
          usuário pergunta sobre queda nas vendas e o assistente, com base em um
          PDF indexado, localiza a região com maior perda e ainda está gerando a
          resposta final.
        </p>

        <div
          aria-hidden
          className="relative flex min-h-[230px] flex-col gap-3.5 overflow-hidden p-5 sm:p-6 lg:min-h-0 lg:flex-1"
        >
          <div
            className="pointer-events-none absolute -top-16 right-0 h-[320px] w-[400px]"
            style={{ background: "var(--glow-card)" }}
          />
          <div className="relative max-w-[360px] rounded-2xl border border-line bg-surface px-4 py-3.5">
            <p className="text-[13px] leading-relaxed text-ink">
              O relatório aponta queda de 12% nas vendas de maio, concentrada na
              região Sul.
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-accent">
              <FileText className="h-3 w-3" />
              fonte: relatorio-q2.pdf
            </p>
          </div>
          <div className="relative flex justify-end">
            <p className="max-w-[240px] rounded-2xl bg-accent px-4 py-3 text-[13px] leading-snug text-white">
              E onde foi a maior perda?
            </p>
          </div>
          <div className="relative flex w-fit items-center gap-1.5 rounded-2xl border border-line bg-surface px-4 py-3">
            <Dot />
            <Dot />
            <Dot />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-8 lg:p-11">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-accent/20 px-2.5 py-1 text-xs font-semibold text-accent">
            {FEATURED.segment}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface2 px-2.5 py-1 text-xs font-semibold text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            <span>No ar</span>
          </span>
        </div>
        <h3 className="text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">
          {FEATURED.title}
        </h3>
        <p className="max-w-[46ch] text-base leading-relaxed text-muted">
          {FEATURED.description}
        </p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {FEATURED.stack.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface2 px-3 py-1.5 text-xs font-medium text-faint"
            >
              <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2.5 pt-3 sm:flex-row">
          <a
            href={FEATURED.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ink px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Demo ao vivo
            <ArrowUpRight className="h-[15px] w-[15px]" />
          </a>
          <a
            href={FEATURED.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-line bg-surface2 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-faint"
          >
            <GitHub className="h-[15px] w-[15px]" />
            Repositório
          </a>
        </div>
      </div>
    </article>
  );
}

function Dot() {
  return <span className="h-[7px] w-[7px] rounded-full bg-faint" />;
}
