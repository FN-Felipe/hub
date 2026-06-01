export type ProjectStatus = "live" | "soon";

export interface Project {
  number: string;
  title: string;
  segment: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
}

export const FEATURED: Project = {
  number: "01",
  title: "Segundo Cérebro",
  segment: "SaaS · IA aplicada",
  description:
    "Você joga links, PDFs e notas. Ele indexa, resume e responde perguntas sobre o seu próprio conteúdo — com citação da fonte e resposta em streaming.",
  stack: ["Next.js", "Hono", "Neon · pgvector", "Drizzle", "Gemini"],
  status: "live",
  liveUrl: "https://second-brain-2026.vercel.app",
  repoUrl: "https://github.com/FN-Felipe/second-brain-frontend",
};

export const UPCOMING: Project[] = [
  {
    number: "02",
    title: "Dashboard Fintech",
    segment: "Fintech · E-commerce",
    description:
      "Painel com RBAC, gráficos e checkout. IA resume os dados do mês em linguagem natural.",
    stack: ["React", "Prisma", "Stripe"],
    status: "soon",
  },
  {
    number: "03",
    title: "App Real-time",
    segment: "Social · Colaboração",
    description:
      "Kanban colaborativo ao vivo: presença, cursores e sync instantâneo entre abas.",
    stack: ["WebSockets", "Redis"],
    status: "soon",
  },
  {
    number: "04",
    title: "Ferramenta de Dev",
    segment: "DX · Tooling",
    description:
      "Playground de prompts e gerador de componentes. CLI + web, empacotado.",
    stack: ["Node", "TypeScript"],
    status: "soon",
  },
  {
    number: "05",
    title: "Landing Animada",
    segment: "Marketing · UI",
    description:
      "Página curta, animada e impecável no mobile. Frontend bonito de verdade.",
    stack: ["Framer Motion"],
    status: "soon",
  },
];
