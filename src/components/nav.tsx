"use client";

import { useEffect, useRef, useState } from "react";

import { GitHub, LinkedIn, Menu, Moon, Sun, WhatsApp } from "@/components/icons";
import { PROFILE } from "@/lib/content";

type Theme = "dark" | "light";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
  }, []);

  function toggle() {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }

  return { theme, mounted, toggle };
}

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

function ThemeToggle() {
  const { theme, mounted, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={mounted ? isDark : undefined}
      aria-label={isDark ? "Tema escuro ativo. Ativar tema claro" : "Tema claro ativo. Ativar tema escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-ink"
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;
      const menu = menuRef.current;
      if (!menu) return;

      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      const current = document.activeElement;

      if (e.shiftKey) {
        if (current === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (current === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      const menu = menuRef.current;
      if (!menu) return;
      const first = menu.querySelector<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm font-bold tracking-tight text-bg">
            {PROFILE.monogram}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            {PROFILE.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isCurrent = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isCurrent ? "true" : undefined}
                    className="text-sm font-medium text-muted transition-colors hover:text-ink aria-[current]:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <span className="h-4 w-px bg-line" aria-hidden />
          <div className="flex items-center gap-2">
            <SocialLink
              href={PROFILE.githubUrl}
              label="GitHub (cabeçalho)"
              icon={<GitHub className="h-4 w-4" />}
            />
            <SocialLink
              href={PROFILE.linkedinUrl}
              label="LinkedIn (cabeçalho)"
              icon={<LinkedIn className="h-4 w-4" />}
            />
            <SocialLink
              href={PROFILE.whatsappUrl}
              label="WhatsApp (cabeçalho)"
              icon={<WhatsApp className="h-4 w-4" />}
            />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-label="Menu de navegação"
          aria-modal="true"
          className="border-t border-line-soft bg-bg px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isCurrent = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isCurrent ? "true" : undefined}
                    onClick={closeMenu}
                    className="block rounded-lg px-2 py-2.5 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-ink aria-[current]:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center gap-2 border-t border-line-soft pt-4">
            <SocialLink
              href={PROFILE.githubUrl}
              label="GitHub (menu)"
              icon={<GitHub className="h-4 w-4" />}
            />
            <SocialLink
              href={PROFILE.linkedinUrl}
              label="LinkedIn (menu)"
              icon={<LinkedIn className="h-4 w-4" />}
            />
            <SocialLink
              href={PROFILE.whatsappUrl}
              label="WhatsApp (menu)"
              icon={<WhatsApp className="h-4 w-4" />}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-ink"
    >
      {icon}
    </a>
  );
}
