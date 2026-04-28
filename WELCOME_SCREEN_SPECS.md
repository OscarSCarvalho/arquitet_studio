# WelcomeScreen - Componente de Boas-vindas Premium

## 📐 Especificações de Design

### Características Principais

#### 1. **Tipografia Elegante**
- **Frase Principal:** "Arquitetura que entende você."
  - Tipografia Serif (font-serif em Tailwind)
  - Tamanho: 5xl em mobile, 7xl em desktop
  - Peso: Light (300) para elegância
  - Tracking: Wide para sofisticação
  - Gradiente sutil de cores (slate-700 → slate-600 → slate-800)

- **Subtítulo:** "Seja bem-vindo à sua nova forma de viver."
  - Tipografia Serif
  - Tamanho: xl em mobile, 3xl em desktop
  - Cor: slate-500
  - Peso: Light

#### 2. **Background Sofisticado**
- **Plano de Fundo Base:**
  - SVG procedural com padrão arquitetônico abstrato
  - Gradiente radial: #f5f3f0 → #e8f0f7 → #f9f7f4
  - Ruído fractal sutil para textura
  - Linhas horizontais abstratas (representando arquitetura moderna)

- **Overlay de Cor:**
  - Gradiente diagonal: slate-50 → blue-50/30 → stone-50
  - Elementos flutuantes com blur (backdrop-blur-3xl)
  - Atmosfera airy (muito espaço em branco)

#### 3. **Elementos Flutuantes Animados**
- Dois círculos grandes com blur (blur-3xl)
  - Posicionados em cantos opostos
  - Animação contínua de opacidade e escala
  - Duração: 8-10 segundos
  - Efeito de respiração (breathing effect)

#### 4. **Botão de Ação - "Iniciar Jornada"**
- **Estilo:** Ghost button com bordas finas
- **Cores:**
  - Borda: slate-700/40 → hover: slate-700/80
  - Texto: slate-700 → hover: slate-900
  - Background: gradiente sutil ao hover

- **Interações:**
  - Scale: 1 → 1.05 (whileHover)
  - Sombra: 0 20px 40px rgba(100, 116, 139, 0.15)
  - Efeito de preenchimento ao hover (scale-x)
  - Ícone com animação de movimento

#### 5. **Indicador de Scroll**
- Seta para baixo com animação contínua
- Anima verticalmente (y: 0 → 10 → 0)
- Duração: 3 segundos em loop infinito
- Cor: slate-400 (discreta)
- Texto: "Explorar"

### 🎨 Paleta de Cores

```
Primary: slate (cinza sofisticado)
- 50: #f8fafc (muito claro)
- 300: #cbd5e1 (bordas)
- 400: #94a3b8 (texto secundário)
- 500: #64748b (texto suave)
- 600: #475569 (texto médio)
- 700: #334155 (texto forte)
- 800: #1e293b (texto muito forte)
- 900: #0f172a (quase preto)

Accent: blue (tom de paz)
- 50: #f0f9ff
- 100: #e0f2fe

Stone (quente):
- 50: #fafaf9
```

### 📱 Responsividade

- **Mobile (< 768px):**
  - Títulos: text-5xl
  - Subtítulos: text-xl
  - Padding: px-4

- **Desktop (≥ 768px):**
  - Títulos: text-7xl
  - Subtítulos: text-3xl
  - Padding: px-0 (censurado)

### ⚡ Animações (Framer Motion)

1. **Container Animation:**
   - Stagger: 0.3s entre filhos
   - Delay inicial: 0.2s
   - Easing: defaultspringConfig

2. **Item Animation:**
   - Tipo: Fade-in + Slide-up
   - Opacity: 0 → 1
   - Y: 20px → 0px
   - Duration: 0.8s
   - Easing: easeOut

3. **Button Interactions:**
   - whileHover: scale(1.05)
   - whileTap: scale(0.98)
   - Transição suave

4. **Background Elements:**
   - Animação contínua de respiração
   - Opacidade: 0.3 ↔ 0.5 (ou 0.2 ↔ 0.4)
   - Escala: 1 ↔ 1.1 (ou 1 ↔ 1.15)
   - Duration: 8-10s
   - Repeat: Infinity

### 🔧 Props

```jsx
<WelcomeScreen onStart={() => setStage('discovery')} />
```

- `onStart`: Function - Callback disparado ao clicar em "Iniciar Jornada"

### ♿ Acessibilidade

- Focus ring visível (focus:outline-none focus:ring-2)
- Botão com tipo apropriado (type="button")
- Estrutura semântica adequada
- Contraste de cor WCAG AA compliant

### 📦 Dependências

- `framer-motion`: Para animações
- `tailwindcss`: Para estilização
- React 19+: Para componentes funcionais

### 🎯 Objetivo

Criar uma primeira impressão premium e sofisticada que:
✨ Transmita leveza e tranquilidade
✨ Estabeleça o tom de luxo minimalista
✨ Convide o usuário à jornada de descoberta
✨ Respeite padrões de acessibilidade
✨ Funcione perfeitamente em todos os dispositivos
