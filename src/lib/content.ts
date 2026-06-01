const WHATSAPP_MESSAGE =
  "Olá, Felipe! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.";

export const PROFILE = {
  name: "Felipe Assis",
  monogram: "FA",
  role: "Desenvolvedor full-stack",
  status: "Disponível para novas oportunidades",
  email: "assis-felipe@outlook.com",
  phone: "+55 16 99341-6028",
  githubUser: "FN-Felipe",
  githubUrl: "https://github.com/FN-Felipe",
  linkedinUrl: "https://www.linkedin.com/in/felipe-assis-ls/",
  whatsappUrl: `https://wa.me/5516993416028?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
} as const;

export const HERO = {
  lead: "Produtos full-stack",
  conjunction: "com",
  accent: "inteligência",
  tail: "de verdade.",
  subtitle:
    "Desenvolvedor full-stack (React + Node). Construo aplicações onde a IA é parte do produto — RAG, embeddings e respostas em streaming — não autocomplete no editor.",
} as const;

export const ABOUT = {
  statement:
    "Entrei na área em outubro de 2022 como estudante de programação. Virei desenvolvedor full-stack focado em TypeScript, React e Node.",
  paragraph:
    "Gosto dos problemas onde a engenharia pesa — busca semântica, sincronização em tempo real, modelagem de dados — e de transformar isso em produto que alguém usa de verdade. A IA entra como peça de arquitetura, não como enfeite.",
  stats: [
    { value: "2022", label: "começou a programar" },
    { value: "5", label: "projetos no portfólio" },
    { value: "∞", label: "curiosidade" },
  ],
} as const;

export const STACK: { label: string; ai?: boolean }[] = [
  { label: "TypeScript" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "Hono" },
  { label: "PostgreSQL" },
  { label: "Neon" },
  { label: "Drizzle ORM" },
  { label: "Tailwind CSS" },
  { label: "Vercel" },
  { label: "Cloudflare Workers" },
  { label: "Vercel AI SDK", ai: true },
  { label: "Gemini", ai: true },
  { label: "Playwright" },
];

export const CONTACT = {
  title: { lead: "Vamos", accent: "construir", tail: "algo?" },
  subtitle: "Aberto a oportunidades full-stack. Costumo responder rápido.",
} as const;
