# Brainstorm de Design - Masterplan Projetos

## Abordagem Selecionada: Industrial Minimalista Sofisticado

Após análise da identidade da Masterplan (engenharia de alto nível, óleo/gás/energia), escolhi uma abordagem que combina **industrial moderno com elegância corporativa**.

### Design Movement
**Brutalism Refinado + Tech Minimalism**: Inspirado em arquitetura industrial real (plantas, tubulações, estruturas metálicas) mas executado com refinamento corporativo. Referências: Harris Group, Bechtel, grandes consultoras de engenharia.

### Core Principles
1. **Autoridade através da Simplicidade**: Menos é mais. Cada elemento tem propósito técnico e visual.
2. **Hierarquia Clara**: Tipografia e espaçamento guiam o olho naturalmente através da jornada do lead.
3. **Confiança Técnica**: Detalhes sutis (linhas, gradientes, proporções) transmitem competência sem parecer genérico.
4. **Performance Visual**: Animações suaves e transições refinadas, nunca frenéticas.

### Color Philosophy
- **Azul Escuro Profundo** (`#0F172A` / `oklch(0.15 0.08 250)`): Confiança, profundidade, tecnologia. Cor primária.
- **Cinza Neutro Quente** (`#6B7280` / `oklch(0.55 0.02 65)`): Texto secundário, subtileza.
- **Branco Puro** (`#FFFFFF`): Espaço respirável, clareza.
- **Azul Accent Brilhante** (`#3B82F6` / `oklch(0.65 0.2 250)`): CTAs, destaques, energia controlada.
- **Cinza Claro Fundo** (`#F9FAFB` / `oklch(0.98 0.001 286)`): Seções alternadas, sem ser branco puro.

**Intenção Emocional**: Profissionalismo sólido + inovação contida. Não é "startup colorida", é "empresa que resolve problemas complexos".

### Layout Paradigm
- **Assimétrico com Eixo Vertical**: Não centrado. Conteúdo flui com ritmo irregular mas intencional.
- **Hero com Tipografia Monumental**: Letras grandes, peso pesado, com vídeo/imagem industrial como backdrop.
- **Seções em Blocos Alternados**: Imagem à esquerda, texto à direita; depois inverte. Cria movimento sem parecer caótico.
- **Espaçamento Generoso**: Breathing room entre seções. Mínimo 6rem entre blocos principais.

### Signature Elements
1. **Letra "M" Estilizada com Vídeo Dentro**: Elemento único da marca. SVG com clipe de vídeo industrial (tubulações, estrutura) dentro. Aparece no header e em seções-chave.
2. **Linhas Diagonais Sutis**: Divisores entre seções com ângulo 15-20°. Remetem a estruturas metálicas, plantas técnicas.
3. **Cards com Borda Esquerda Colorida**: Cada disciplina/serviço tem borda esquerda em cor diferente (azul, cinza, accent). Cria identidade visual modular.

### Interaction Philosophy
- **Hover Elevado**: Cards ganham sombra suave ao passar mouse. Botões ganham cor mais vibrante + ícone que aparece.
- **Scroll Suave**: Transições entre seções com fade-in leve + movimento de entrada.
- **Formulário Inteligente**: Campos focam com borda azul accent. Feedback visual claro (sucesso/erro).
- **Menu Fixo Elegante**: Header com logo "M" + menu horizontal. Muda de cor ao scroll (fundo semi-transparente).

### Animation
- **Entrance**: Elementos aparecem com fade-in + movimento vertical sutil (50px down) ao scroll. Duração: 600ms.
- **Hover**: Cards elevam 4px com sombra. Botões ganham glow sutil. Duração: 200ms.
- **Scroll Trigger**: Números em estatísticas contam até o valor ao entrar em viewport. Efeito "contador".
- **Vídeo M**: Loop contínuo, volume mudo. Pausa ao hover.

### Typography System
- **Display/Headlines**: `Poppins Bold (700)` ou `Sora Bold (700)` — peso pesado, sem serifa, moderno.
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 24px (mobile)
  - H3: 28px (desktop), 20px (mobile)
- **Body/Texto**: `Inter Regular (400)` — legível, neutro, técnico.
  - Body: 16px line-height 1.6
  - Small: 14px line-height 1.5
- **Accent/Números**: `Courier New` ou `IBM Plex Mono` — para dados técnicos, números, códigos.

**Hierarquia**:
- Títulos em Poppins Bold, azul escuro
- Subtítulos em Poppins Medium (500), cinza
- Corpo em Inter Regular, cinza escuro
- CTAs em Inter Semi-bold (600), branco sobre azul

---

## Alternativas Descartadas

### Opção 2: Design System Corporativo Clássico (Probabilidade: 0.08)
Paleta azul + branco puro, grid rígido, muita simetria. Problema: Parece genérico demais, não diferencia Masterplan.

### Opção 3: Tech Startup Colorida (Probabilidade: 0.07)
Gradientes vibrantes, muitas cores, animações frenéticas. Problema: Não passa confiança para decisões de milhões em contratos industriais.

---

## Próximos Passos
1. Gerar imagens de herói (industrial, técnico, moderno)
2. Implementar estrutura de rotas (Home, Sobre, Serviços, etc.)
3. Criar componentes base (Header, Footer, Cards)
4. Desenvolver cada página com conteúdo técnico
5. Integrar formulário de contato e WhatsApp
