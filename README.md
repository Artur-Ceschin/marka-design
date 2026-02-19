# @marka/ui

> Marka Nordic Plant App — Design System  
> React + TypeScript + Tailwind CSS + Storybook

---

## Quick Start

```bash
# 1. Install deps
npm install

# 2. Run Storybook
npm run dev
# → http://localhost:6006
```

---

## Setup (from scratch)

```bash
mkdir marka-ui && cd marka-ui
npm init -y

# React + TypeScript
npm install react react-dom typescript
npm install -D @types/react @types/react-dom

# Storybook
npx storybook@latest init --type react

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Build
npm install -D tsup

# Utils
npm install clsx
```

---

## Project Structure

```
marka-ui/
├── .storybook/
│   ├── main.ts          ← Storybook config
│   └── preview.ts       ← Global styles + backgrounds
├── src/
│   ├── tokens/
│   │   └── index.ts     ← All design tokens as TS constants
│   ├── components/
│   │   ├── Button/
│   │   ├── Tag/
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Badge/
│   │   └── Navigation/
│   ├── stories/
│   │   ├── Tokens.stories.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Tag.stories.tsx
│   │   ├── Input.stories.tsx
│   │   ├── Card.stories.tsx
│   │   └── Navigation.stories.tsx
│   ├── styles.css       ← Tailwind + CSS variables + Google Fonts
│   └── index.ts         ← Package exports
├── tailwind.config.ts   ← All Marka tokens mapped to Tailwind
├── tsconfig.json
├── tsup.config.ts
└── package.json
```

---

## Usage (after publishing)

```bash
npm install @marka/ui
```

```tsx
import { Button, Tag, FindCard } from '@marka/ui'
import '@marka/ui/styles'

export function PlantScreen() {
  return (
    <div>
      <Tag variant="green">Edible</Tag>
      <FindCard
        name="Wood Fern"
        latin="Dryopteris"
        date="Today"
      />
      <Button variant="primary">Save to notebook</Button>
    </div>
  )
}
```

---

## Components

| Component        | Variants / Props |
|-----------------|-----------------|
| `Button`        | primary, secondary, ghost, amber, danger, subtle · sizes xl→xs |
| `Tag`           | green, amber, berry, dark, neutral · sizes md, sm |
| `Input`         | default, focused, filled, error, disabled · pill option |
| `Textarea`      | with character count |
| `FindCard`      | name, latin, date, imageBg/Url |
| `FeaturedCard`  | name, latin, tags, bgColor |
| `PlantResultCard` | full result with confidence + actions |
| `NotebookStrip` | count, weekCount |
| `Badge`         | green, amber, berry, dark, neutral · dot + pulse |
| `BottomNav`     | light/dark theme · camera button |
| `ScreenHeader`  | light/dark · back/share actions |

---

## Publishing

```bash
# Dry run first
npm run publish:dry

# When ready
npm login
npm run publish:npm
```

---

## Design Tokens

All tokens are available as TypeScript constants:

```ts
import { tokens } from '@marka/ui'

tokens.colors.green.moss   // '#4A6741'
tokens.shadows.greenGlow   // '0 4px 16px rgba(74,103,65,0.45)'
tokens.radius.lg           // '24px'
tokens.spacing[6]          // '24px'
```
