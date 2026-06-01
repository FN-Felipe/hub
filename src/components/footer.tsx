import { PROFILE } from "@/lib/content";

const LINKS = [
  { label: "GitHub", ariaLabel: "GitHub (rodapé)", href: PROFILE.githubUrl },
  { label: "LinkedIn", ariaLabel: "LinkedIn (rodapé)", href: PROFILE.linkedinUrl },
  { label: "WhatsApp", ariaLabel: "WhatsApp (rodapé)", href: PROFILE.whatsappUrl },
  { label: "Email", ariaLabel: "Email (rodapé)", href: `mailto:${PROFILE.email}` },
];

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-3 px-6 py-7 sm:px-8 md:flex-row md:justify-between lg:px-12">
      <p className="order-2 text-[13px] font-medium text-faint md:order-1">
        © 2026 {PROFILE.name}
      </p>
      <p className="order-3 text-[13px] text-faint md:order-2">
        Next.js · Tailwind · deploy na Vercel
      </p>
      <nav
        aria-label="Rodapé"
        className="order-1 flex items-center gap-6 md:order-3"
      >
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.ariaLabel}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[13px] font-medium text-muted transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
