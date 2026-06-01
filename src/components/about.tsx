import { Reveal } from "@/components/reveal";
import { ABOUT } from "@/lib/content";
import type { GitHubStats } from "@/lib/github";

export function About({ stats }: { stats: GitHubStats }) {
  const items = [
    ABOUT.stats[0],
    { value: `${stats.publicRepos}`, label: "repositórios públicos" },
    ABOUT.stats[2],
  ];

  return (
    <section
      id="sobre"
      className="border-b border-line-soft"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-20 sm:px-8 md:grid-cols-[300px_1fr] md:gap-[90px] lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-sm font-semibold text-accent">01</p>
          <p className="mt-1.5 text-xs font-semibold tracking-[0.18em] text-faint">
            SOBRE
          </p>
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-6">
          <h2 className="max-w-[20ch] text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[30px] sm:leading-[1.35]">
            {ABOUT.statement}
          </h2>
          <p className="max-w-[680px] text-base leading-relaxed text-muted sm:text-lg">
            {ABOUT.paragraph}
          </p>
          <div className="mt-2 flex gap-8 sm:gap-12">
            {items.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold tracking-tight text-ink sm:text-[26px]">
                  {stat.value}
                </span>
                <span className="text-xs text-faint sm:text-[13px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
