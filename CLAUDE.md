# CLAUDE.md - Sparkline Design System

This file provides guidance for Claude Code when working with this codebase.

## Project Overview

Sparkline Design System is a React component library built with TypeScript and Storybook. It implements reusable UI components based on designs from Figma.

## Tech Stack

- **Framework**: React 18.2
- **Language**: TypeScript 5.3
- **Build Tool**: Vite 5
- **Documentation**: Storybook 7.6
- **Styling**: CSS (component-scoped CSS files)

## Commands

```bash
npm run storybook      # Start Storybook dev server on port 6006
npm run build-storybook # Build static Storybook site
npm run build          # TypeScript compile + Vite build
npm run preview        # Preview production build
```

## Project Structure

```
sparkline-storybook/
├── .storybook/           # Storybook configuration
│   ├── main.ts           # Stories location, addons, framework config
│   └── preview.ts        # Global decorators, parameters, backgrounds
├── src/
│   ├── components/       # React components (each in own folder)
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── ButtonGroup/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── Chip/
│   │   ├── Input/
│   │   └── Switch/
│   ├── docs/             # MDX documentation pages
│   │   └── BrandIdentity/  # Brand docs (Colors.mdx, etc.)
│   ├── styles/           # Global styles (global.css)
│   ├── tokens/           # Design tokens (tokens.ts)
│   └── index.ts          # Barrel file — exports all components + tokens
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component Architecture

Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx         # React component
├── ComponentName.css         # Scoped styles
└── ComponentName.stories.tsx # Storybook stories
```

### Adding New Components

1. Create folder: `src/components/[ComponentName]/`
2. Create `.tsx`, `.css`, and `.stories.tsx` files
3. Export the component **and its props interface** from `src/index.ts`

## Design Tokens

Tokens are defined in `src/tokens/tokens.ts` and re-exported from `src/index.ts`.

- **Colors**: Primary (purple), Secondary (magenta), Neutral (grayscale), Alert (semantic) — each with 9 shades
- **Spacing**: `spacing-xs` (4px), `spacing-sm` (8px), `spacing-md` (16px), `spacing-lg` (24px), `spacing-xl` (32px)
- **Border Radius**: `radius-sm` (2px), `radius-md` (4px), `radius-lg` (8px), `radius-xl` (12px), `radius-full` (999px)
- **Typography**: Roboto (primary), Manrope (secondary)
- **Shadows**: `shadow-button`, `shadow-sm`, `shadow-md`, `shadow-lg`

Color naming convention: `{category}-{shade}` (e.g., `primary-50`, `neutral-30`)

## Implemented Components

- **Avatar**: Profile avatars with text/icon/image, status badges, notifications
- **Badge**: Status indicators with color variants
- **Button**: Variants (filled, outlined, text), sizes, states, icon support
- **ButtonGroup**: Grouped button actions
- **Card**: Flexible cards with variants, images, footer actions
- **Checkbox**: With label, indeterminate state, disabled state
- **Chip**: Tag/filter components
- **Input**: Text input with label, helper text, error states, icons
- **Switch**: Toggle switch with animations

## Storybook Conventions

- Stories use CSF3 format (Component Story Format)
- Use `autodocs` tag for automatic documentation
- Include controls for all component props
- Add stories for all component variants and states
- Framework: `@storybook/react-vite`
- Addons: `addon-links`, `addon-essentials`, `addon-interactions`
- Preview backgrounds: light, dark, gray

## Code Style

- TypeScript strict mode enabled (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- Component props defined as interfaces (e.g., `ButtonProps`)
- CSS classes follow BEM-like component naming (e.g., `.button`, `.button--large`)
- No CSS-in-JS; use separate CSS files
- Fonts: Roboto (buttons, captions), Manrope (headings)
