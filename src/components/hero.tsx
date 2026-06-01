import { ArrowRight, GitHub } from "@/components/icons";
import { HERO, PROFILE } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-line-soft"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[720px]"
        style={{ background: "var(--glow-hero)" }}
      />
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-24 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-32 lg:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-emerald-400" />
          {PROFILE.status}
        </span>

        <h1 className="mt-8 max-w-[15ch] text-[42px] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[78px] lg:tracking-[-0.03em]">
          {HERO.lead} {HERO.conjunction}{" "}
          <span className="font-serif text-accent">{HERO.accent}</span>{" "}
          {HERO.tail}
        </h1>

        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted sm:text-lg lg:mt-7 lg:max-w-[620px]">
          {HERO.subtitle}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-ink px-5 py-3.5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Ver projetos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-line bg-surface px-5 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-faint"
          >
            <GitHub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
