import { GitHub, LinkedIn, Mail, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CONTACT, PROFILE } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-b border-line-soft"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[620px] -translate-x-1/2"
        style={{ background: "var(--glow-contact)" }}
      />
      <Reveal className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-28 text-center sm:px-8 lg:py-36">
        <p className="text-xs font-semibold tracking-[0.18em] text-faint">
          04 · CONTATO
        </p>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[58px] lg:tracking-[-0.02em]">
          {CONTACT.title.lead}{" "}
          <span className="font-serif text-accent">{CONTACT.title.accent}</span>{" "}
          {CONTACT.title.tail}
        </h2>
        <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-muted sm:text-lg">
          {CONTACT.subtitle}
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Conversar no WhatsApp: ${PROFILE.phone}`}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-faint sm:w-auto"
          >
            <WhatsApp className="h-4 w-4" />
            {PROFILE.phone}
          </a>
          <div className="flex w-full gap-3 sm:w-auto">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (contato)"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-line bg-surface px-5 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-faint sm:flex-none"
            >
              <LinkedIn className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (contato)"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-line bg-surface px-5 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-faint sm:flex-none"
            >
              <GitHub className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
