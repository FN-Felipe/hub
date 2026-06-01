import { Reveal } from "@/components/reveal";
import { TechIcon } from "@/components/tech-icons";
import { STACK } from "@/lib/content";

export function Stack() {
  return (
    <section id="stack" className="border-b border-line-soft">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 py-20 sm:px-8 md:grid-cols-[300px_1fr] md:gap-[90px] lg:px-12 lg:py-28">
        <Reveal>
          <p className="text-sm font-semibold text-accent-violet">02</p>
          <p className="mt-1.5 text-xs font-semibold tracking-[0.18em] text-faint">
            STACK
          </p>
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-7">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-[30px]">
            As ferramentas do ofício
          </h2>
          <ul className="flex flex-wrap gap-3">
            {STACK.map((tech) => (
              <li
                key={tech.label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium"
              >
                <TechIcon
                  name={tech.label}
                  className="h-[18px] w-[18px] shrink-0"
                />
                <span className={tech.ai ? "text-ink" : "text-muted"}>
                  {tech.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
