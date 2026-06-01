# Script de Teste Manual de Acessibilidade

**Escopo**: Portfolio hub — WCAG 2.2 Nível AA  
**Tecnologias assistivas**: NVDA (Windows) + VoiceOver (macOS)

---

## Pré-requisitos

- **NVDA**: versão 2023.1 ou superior + Chrome/Firefox
- **VoiceOver**: macOS Ventura+ (atalho: Cmd+F5 para ligar/desligar)
- Abrir `http://localhost:3100` com o build de produção rodando
- Testar nas duas preferências de tema: claro e escuro

---

## 1. Navegação por Skip Link

**Objetivo**: verificar que o link "Pular para o conteúdo" funciona.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Acessar a página e pressionar **Tab** imediatamente | Skip link "Pular para o conteúdo" aparece visualmente e é anunciado pelo leitor |
| 2 | Pressionar **Enter** no skip link | Foco vai para o início do conteúdo principal (`<main>`) sem scroll do cabeçalho sobrepor |
| 3 | Pressionar **Tab** novamente | Próximo foco é o primeiro elemento interativo dentro do `<main>` (Hero — botão "Ver projetos") |

---

## 2. Navegação pelo Cabeçalho (Desktop ≥ 768px)

**Objetivo**: verificar landmarks, links e foco visível.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Navegar por landmarks (`Insert+F7` no NVDA / `VO+U` no VoiceOver) | Anunciado: "Cabeçalho", "Principal", "Rodapé" — na ordem correta |
| 2 | Navegar pelos links do cabeçalho com **Tab** | NVDA/VoiceOver anuncia: "Sobre", "Stack", "Projetos", "Contato" |
| 3 | Verificar links sociais no cabeçalho | Anunciados como: "GitHub (cabeçalho)", "LinkedIn (cabeçalho)", "WhatsApp (cabeçalho)" |
| 4 | Verificar o botão de tema | Anunciado como "Tema escuro ativo. Ativar tema claro" (ou vice-versa). Estado `aria-pressed` deve mudar após clique |
| 5 | Verificar foco visível em todos os elementos | Anel de foco azul/roxo visível ao navegar com Tab — nenhum elemento perde o anel |

---

## 3. Menu Mobile (≤ 767px)

**Objetivo**: verificar focus trap, Esc e retorno de foco.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Reduzir viewport para 390px ou usar DevTools mobile | Apenas o botão hambúrguer e o toggle de tema são visíveis |
| 2 | Pressionar **Tab** até o botão "Abrir menu" e **Enter** | Menu abre. NVDA/VoiceOver anuncia "Menu de navegação" (dialog). Foco vai para o primeiro link do menu |
| 3 | Pressionar **Tab** repetidamente | Foco percorre apenas os elementos dentro do menu — não vaza para o conteúdo por baixo |
| 4 | Pressionar **Shift+Tab** no primeiro elemento | Foco vai para o último elemento do menu (focus trap reverso) |
| 5 | Pressionar **Escape** | Menu fecha. Foco retorna ao botão hambúrguer |
| 6 | Clicar em um link do menu com teclado | Menu fecha e foco retorna ao botão hambúrguer |

---

## 4. Hierarquia de Cabeçalhos

**Objetivo**: verificar h1→h2→h3 sem saltos.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Listar cabeçalhos (`Insert+F7` no NVDA / `VO+U + H` no VoiceOver) | Lista deve conter: **H1** "Produtos full-stack com inteligência de verdade" → **H2** (Sobre) → **H2** "As ferramentas do ofício" → **H2** "Trabalho em destaque" + H3 dos projetos → **H2** "Vamos construir algo?" |
| 2 | Navegar com a tecla **H** (NVDA) ou **VO+Cmd+H** (VoiceOver) | Cabeçalhos aparecem em ordem lógica sem saltos de nível |

---

## 5. Seção de Projetos — Demo de Chat

**Objetivo**: verificar que a demo ilustrativa é acessível a leitores de tela.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Navegar até o card "Segundo Cérebro" | Leitor de tela anuncia a descrição textual da demo: "Demonstração ilustrativa do produto Segundo Cérebro: um chat onde o usuário pergunta sobre queda nas vendas..." |
| 2 | Verificar a interface visual do chat (bolhas, pontos de digitação) | A área visual tem `aria-hidden="true"` — o leitor de tela NÃO lê as bolhas individualmente nem os pontos animados |
| 3 | Verificar o badge "No ar" | Anunciado como "No ar" — não apenas como uma bolinha verde (texto presente) |
| 4 | Navegar links "Demo ao vivo" e "Repositório" | Ambos são anunciados com texto descritivo e abrem em nova aba (anunciado "link, abre em nova guia" em alguns leitores) |

---

## 6. Links Sociais — Desambiguação

**Objetivo**: verificar que links duplicados em cabeçalho e rodapé são distintos.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Listar todos os links (`Insert+F7` no NVDA / `VO+U + L` no VoiceOver) | "GitHub (cabeçalho)" e "GitHub (rodapé)" aparecem como entradas distintas — não dois links chamados apenas "GitHub" |
| 2 | Idem para LinkedIn e WhatsApp | Todos distinguidos por "(cabeçalho)", "(menu)", "(contato)" e "(rodapé)" conforme localização |

---

## 7. Seção de Contato

**Objetivo**: verificar links e região de contato.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Navegar até a seção "Contato" | `<section id="contato">` é o destino correto do link do nav |
| 2 | Verificar o link de e-mail | Anunciado como o endereço completo: "assis-felipe@outlook.com" com href `mailto:` |
| 3 | Verificar links LinkedIn e GitHub | Anunciados como "LinkedIn (contato)" e "GitHub (contato)" |

---

## 8. Seção de Rodapé

**Objetivo**: verificar landmark e links.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Navegar ao landmark "Rodapé" | VoiceOver/NVDA anuncia "Rodapé" e, dentro dele, a `<nav aria-label="Rodapé">` |
| 2 | Navegar pelos links do rodapé | Anunciados como: "GitHub (rodapé)", "LinkedIn (rodapé)", "WhatsApp (rodapé)", "Email (rodapé)" |

---

## 9. Zoom 200%

**Objetivo**: verificar que o layout não quebra e não há scroll horizontal.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Zoom do navegador para 200% (Ctrl+= / Cmd+=) | Layout reflow para uma coluna — nenhum conteúdo é cortado horizontalmente |
| 2 | Navegar todas as seções com scroll vertical | Nenhuma seção exige scroll horizontal para ver o conteúdo |
| 3 | Abrir menu mobile (se viewport < 768px em 200%) | Menu funciona normalmente |

---

## 10. Preferência de Movimento Reduzido

**Objetivo**: verificar que animações respeitam `prefers-reduced-motion`.

| # | Ação | Resultado esperado |
|---|------|--------------------|
| 1 | Ativar "Reduzir movimento" nas preferências do SO | As seções aparecem sem animação de entrada (reveal) — conteúdo visível imediatamente |
| 2 | O scroll suave é desativado | `scroll-behavior: auto` — sem scroll animado ao clicar em links âncora |

---

## Critérios de Aprovação

- [ ] Todos os 10 cenários acima passam sem anúncios inesperados ou silêncio indevido
- [ ] Nenhum elemento focável perde o anel de foco visível
- [ ] Nenhuma informação é comunicada exclusivamente por cor
- [ ] O leitor de tela nunca fica "preso" em uma região ou perde contexto
- [ ] Zoom 200% não quebra nenhuma seção
