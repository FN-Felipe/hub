import { FeaturedCard } from "@/components/featured-card";
import { Reveal } from "@/components/reveal";
import { TechIcon } from "@/components/tech-icons";
import { UPCOMING } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-b border-line-soft">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold text-accent-teal">03</span>
            <span className="text-xs font-semibold tracking-[0.18em] text-faint">
              PROJETOS · 01 DE 05
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-[40px] sm:tracking-[-0.03em]">
              Trabalho em destaque
            </h2>
            <span className="text-sm font-medium text-faint">01 de 05 no ar</span>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-11">
          <FeaturedCard />
        </Reveal>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING.map((project, i) => (
            <li key={project.number}>
              <Reveal delay={i * 60}>
                <article className="flex h-full flex-col gap-3.5 rounded-2xl border border-line-soft bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-faint">
                      {project.number}
                    </span>
                    <span className="rounded-full border border-line bg-surface2 px-2.5 py-1 text-[11px] font-medium text-faint">
                      Em breve
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-faint"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
