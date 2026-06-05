# CLAUDE.md - Sparkline Design System

This file provides guidance for Claude Code when working with this codebase.

## Project Overview

Sparkline Design System is an Angular component library built with TypeScript and Storybook. It implements reusable UI components based on designs from Figma.

## Tech Stack

- **Framework**: Angular 21 (@angular/core 21.1.5)
- **Language**: TypeScript 5.9 (strict mode)
- **Build Tool**: Angular CLI 21 / Webpack (via Storybook)
- **Documentation**: Storybook 10.2
- **Styling**: SCSS (component-scoped `.scss` files)

## Commands

```bash
npm run storybook      # Start Storybook dev server on port 6006
npm run build-storybook # Build static Storybook site
npm run build          # Angular production build
```

## Project Structure

```
sparkline-design-system/
├── .storybook/           # Storybook configuration
│   ├── main.ts           # Stories location, addons, framework config
│   └── preview.ts        # Global parameters, theme decorator
├── src/
│   ├── app/
│   │   └── components/   # Angular standalone components (each in own folder)
│   │       ├── avatar/
│   │       ├── badge/
│   │       ├── button/
│   │       ├── chip/
│   │       ├── icon/
│   │       ├── input/
│   │       └── switch/
│   ├── docs/             # MDX documentation pages
│   │   └── BrandIdentity/  # Brand docs (Colors.mdx, Typography.mdx)
│   ├── styles/           # Global styles (global.css)
│   ├── tokens/           # Design tokens (tokens.ts)
│   └── index.ts          # Barrel file — exports all components + tokens
├── angular.json          # Angular workspace config with Storybook builders
├── package.json
├── tsconfig.json
└── tsconfig.storybook.json
```

## Component Architecture

Each component follows this structure:
```
src/app/components/componentname/
├── componentname.component.ts    # Angular standalone component + exported types
├── componentname.component.html  # Component template
├── componentname.component.scss  # Scoped styles (use .scss)
└── componentname.stories.ts      # Storybook CSF3 stories
```

Conventions:
- Selector prefix is `sp-` (e.g., `sp-button`, `sp-chip`)
- Union type aliases (e.g., `ButtonType`, `ButtonSize`) are declared in the `.component.ts` file and exported
- All component types are re-exported from `src/index.ts` using `export type { ... }`
- Folder and file names are lowercase (e.g., `button/button.component.ts`)

### Adding New Components

1. Create folder: `src/app/components/[componentname]/` (all lowercase)
2. Create `[componentname].component.ts`, `[componentname].component.html`, `[componentname].component.scss`, and `[componentname].stories.ts`
3. Use `standalone: true` with `CommonModule` in `imports: []`; add other standalone components as needed (e.g., `IconComponent`)
4. Export union type aliases from the `.component.ts` file
5. Export the component class and all type aliases from `src/index.ts`
6. Verify `npm run build-storybook` compiles without TypeScript errors before considering the component complete

## TypeScript Strict Mode Rules

This project enforces the following compiler flags — every rule below causes a build error if violated:

```json
// tsconfig.json
"strict": true,
"noImplicitOverride": true,
"noPropertyAccessFromIndexSignature": true,
"noImplicitReturns": true,
"noFallthroughCasesInSwitch": true,

// angularCompilerOptions
"strictInjectionParameters": true,
"strictInputAccessModifiers": true,
"strictTemplates": true
```

### @Input() Initialization

Always initialize `@Input()` properties with a default value inline. Never leave them uninitialized or use `!` (non-null assertion) on inputs.

```typescript
// CORRECT — always provide a default value
@Input() label = '';
@Input() type: ButtonType = 'filled';
@Input() size: ButtonSize = 'large';
@Input() disabled = false;
@Input() count = 0;

// WRONG — TS2564: property not definitely assigned
@Input() label: string;
@Input() type: ButtonType;

// WRONG — avoid ! on @Input()
@Input() label!: string;
```

`!` is only acceptable for properties Angular guarantees will be set before use (e.g., `@ViewChild`):

```typescript
@ViewChild('myRef') myRef!: ElementRef; // acceptable — set by Angular lifecycle
```

### Union Type @Input() Properties

Export the union type from the component file. Declare `@Input()` with that type and a valid default:

```typescript
// button.component.ts
export type ButtonType = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'large' | 'small';

export class ButtonComponent {
  @Input() type: ButtonType = 'filled';
  @Input() size: ButtonSize = 'large';
}
```

### noImplicitReturns — Methods and Getters

Every function or getter with a non-`void` return type must have an explicit `return` on all code paths, including the final fallthrough:

```typescript
// CORRECT — explicit return covers all cases
get iconSize(): number {
  if (this.size === 'large') return 32;
  if (this.size === 'medium') return 24;
  return 18; // required — covers 'small' and any other value
}

// WRONG — TS2366: function lacks ending return statement
get iconSize(): number {
  if (this.size === 'large') return 32;
  if (this.size === 'medium') return 24;
  // missing return for 'small'
}
```

### noPropertyAccessFromIndexSignature

When accessing objects typed as `Record<string, T>` or with an index signature, use bracket notation, not dot notation:

```typescript
// CORRECT
const path = ICON_REGISTRY[this.name as IconName] ?? '';

// WRONG — TS4111: must be accessed with ['check']
const path = ICON_REGISTRY.check;
```

### noFallthroughCasesInSwitch

Every `case` in a `switch` must end with `break`, `return`, or `throw`:

```typescript
// CORRECT
switch (this.type) {
  case 'filled': return 'sp-button--filled';
  case 'outlined': return 'sp-button--outlined';
  default: return 'sp-button--text';
}
```

### ControlValueAccessor Implementation

When implementing `ControlValueAccessor`, initialize all callback fields to no-ops so strict property initialization is satisfied:

```typescript
private onChange: (val: string) => void = () => {};
private onTouched: () => void = () => {};

writeValue(val: string): void { this.value = val ?? ''; }
registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
registerOnTouched(fn: () => void): void { this.onTouched = fn; }
setDisabledState(isDisabled: boolean): void {
  this.state = isDisabled ? 'disabled' : 'default';
}
```

### Template Event Casting

Cast `event.target` to the correct element type to satisfy `strictTemplates`:

```typescript
onInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  this.value = target.value;
}
```

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
- **ButtonGroup**: Segmented control grouping 2–5 buttons; size and content-type variants
- **Chip**: Tag/filter components
- **Icon**: SVG icon system with centralized registry (62 icons)
- **Input**: Text input with label, helper text, error states, icons
- **Switch**: Toggle switch with animations

## Storybook Conventions

- Stories use CSF3 format (Component Story Format)
- Use `autodocs` tag for automatic documentation
- Include controls for all component `@Input()` properties
- Add stories for all component variants and states
- Framework: `@storybook/angular`
- Addons: `addon-docs`, `addon-themes`
- Themes: light and dark (toggled via `data-theme` attribute)
- Storybook is built via Angular builder (configured in angular.json)

## Writing Stories

All stories use CSF3 format with `@storybook/angular`. Follow these patterns to avoid TypeScript errors.

### Required Imports

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { MyComponent } from './my.component';
import type { MyType, MySize } from './my.component';
// Only import ICON_REGISTRY if the component has icon name inputs
import { ICON_REGISTRY } from '../icon/icon-registry';
```

Use `import type` for `Meta`, `StoryObj`, and all type-only imports (required by `isolatedModules`).

### Meta Object Structure

```typescript
const meta: Meta<MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: { /* see argTypes rules below */ },
  args: { /* must match @Input() property names exactly */ },
};

export default meta;
type Story = StoryObj<MyComponent>;
```

`type Story = StoryObj<MyComponent>` must appear after `export default meta`.

### argTypes Control-Type Mapping

Every key in `argTypes` must match an `@Input()` property name exactly — TypeScript validates this:

| `@Input()` TypeScript type | `argTypes` control value |
|---|---|
| `string` (free text) | `{ control: 'text' }` |
| `boolean` | `{ control: 'boolean' }` |
| `number` | `{ control: 'number' }` |
| `'a' \| 'b' \| 'c'` (union) | `{ control: 'select', options: ['a', 'b', 'c'] }` |
| `@Output()` EventEmitter | `{ table: { disable: true } }` |

For icon name inputs, use the live registry as options (never hardcode icon strings):

```typescript
leftIconName: {
  control: 'select',
  options: Object.keys(ICON_REGISTRY),
},
```

### args Discipline

The `args` object must:
- Use keys that exactly match `@Input()` property names (a misspelled key is a TypeScript error)
- Use values that are valid members of the property's declared type

```typescript
// CORRECT — keys match @Input() names, values match types
args: {
  label: 'Button',
  type: 'filled',   // ButtonType = 'filled' | 'outlined' | 'text'
  size: 'large',    // ButtonSize = 'large' | 'small'
  disabled: false,
},

// WRONG — 'variant' does not exist as an @Input() — TS2353 error
args: { variant: 'filled' },
```

### Playground Story (simple)

The simplest story uses no `render` function; Storybook uses `meta.args` as defaults:

```typescript
export const Playground: Story = {};
```

### Custom render Functions

Use one of two patterns depending on whether the story needs to forward args:

```typescript
// Pattern 1: Static layout (no args forwarding)
export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px;">
        <sp-chip label="Default" state="default"></sp-chip>
        <sp-chip label="Disabled" state="disabled"></sp-chip>
      </div>
    `,
    moduleMetadata: {
      imports: [ChipComponent],
    },
  }),
};

// Pattern 2: Interactive (forward args to template bindings)
export const Toggle: Story = {
  render: (args) => ({
    props: args,
    template: `<sp-switch [checked]="checked" [disabled]="disabled"></sp-switch>`,
    moduleMetadata: {
      imports: [SwitchComponent],
    },
  }),
  args: { checked: false, disabled: false },
};
```

In `moduleMetadata.imports`, list only the standalone component classes needed for the template.

### Story Title Convention

```typescript
title: 'Components/Button'        // component stories
title: 'Foundations/Icon Gallery' // foundations/system stories
title: 'Brand Identity/Colors'    // brand documentation
```

## Code Style

### TypeScript Conventions

- All `@Input()` properties must have an inline default value — never leave untyped or use `!`
- Export union type aliases from the component file; re-export from `src/index.ts` with `export type`
- Private class fields used for internal state must be explicitly initialized: `private _state: 'hover' | 'focus' | null = null`
- All methods/getters with a non-`void` return type must have an explicit `return` on every code path (`noImplicitReturns`)
- Use `event.target as HTMLInputElement` when casting in DOM event handlers

### Import Order in `.component.ts` Files

1. Angular core (`@angular/core`, `@angular/common`, `@angular/forms`)
2. Other Angular packages
3. Internal component imports (`../icon/icon.component`)
4. Type-only imports from internal files

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

export type MyType = 'a' | 'b';
```

### Angular Component Conventions

- All components use `standalone: true`
- Always include `CommonModule` in `imports: []` for `*ngIf`, `*ngFor`, `[ngClass]`, etc.
- Add `IconComponent` to `imports: []` whenever the template uses `<sp-icon>`
- Add `FormsModule` to `imports: []` if the template uses `[(ngModel)]`
- Use `styleUrls: ['./componentname.component.scss']`, not inline `styles`

### CSS / Styling Conventions

- No CSS-in-JS; use separate `.scss` files per component
- CSS classes follow BEM-like naming: `.sp-button`, `.sp-button--large`, `.sp-button__icon`
- All design tokens are CSS custom properties defined in `src/styles/global.css` — always use `var(--token-name)` in component SCSS
- Fonts: Roboto for UI elements (buttons, body, captions); Manrope for headings
- **Semantic tokens only**: All component SCSS must use semantic CSS custom properties exclusively (e.g., `var(--color-surface-brand)`, `var(--spacing-md)`, `var(--radius-md)`). Never write hardcoded hex values, raw pixel values for spacing/color/radius, or reference primitive color tokens (e.g., `--primary-50`, `--neutral-20`) directly in component files. The only exception is `var(--primary-30)` used for focus ring outlines, which has no semantic alias. Primitive tokens are otherwise reserved for defining semantic tokens in `src/styles/global.css`.

## Common Build Errors and Fixes

When `npm run storybook` or `npm run build-storybook` fails with a TypeScript or Angular template error, match it to an entry below.

### TS2564 — Property has no initializer

```
error TS2564: Property 'label' has no initializer and is not definitely
assigned in the constructor.
```

**Cause**: An `@Input()` was declared with a type annotation but no default value.

**Fix**: Add an inline default:

```typescript
// Before
@Input() label: string;
// After
@Input() label = '';
```

### TS2345 — Argument not assignable to type

```
error TS2345: Argument of type '"medium"' is not assignable to parameter
of type 'ButtonSize'.
```

**Cause**: A story's `args` value doesn't match the component's union type (often a value was removed from the union, or there's a typo).

**Fix**: Ensure every value in `argTypes.options` and `args` exactly matches a union member defined in the component file.

### TS2353 — Object literal specifies unknown properties

```
error TS2353: Object literal may only specify known properties, and
'variant' does not exist in type 'Partial<ButtonComponent>'.
```

**Cause**: A story's `args` or `argTypes` has a key that doesn't match any `@Input()` on the component.

**Fix**: Check the component's `@Input()` property names and rename the key in `args`/`argTypes` to match exactly.

### NG8002 — Can't bind to property — element not known

```
error NG8002: Can't bind to 'name' since it isn't a known property of 'sp-icon'.
```

**Cause**: A component template uses `<sp-icon>` but `IconComponent` is not in the component's `imports: []`.

**Fix**: Add `IconComponent` to `imports`:

```typescript
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, IconComponent],
  ...
})
```

### TS2366 — Function lacks ending return statement

```
error TS2366: Function lacks ending return statement and return type
does not include 'undefined'.
```

**Cause**: A getter or method has a non-`void` return type but a code path has no explicit `return` (`noImplicitReturns`).

**Fix**: Add an explicit `return` on all paths including the fallthrough:

```typescript
// Before
get iconSize(): number {
  if (this.size === 'large') return 32;
  // missing return for other sizes
}
// After
get iconSize(): number {
  if (this.size === 'large') return 32;
  return 18;
}
```

### TS2322 — Type 'X | null' not assignable to type 'X'

```
error TS2322: Type 'string | null' is not assignable to type 'string'.
```

**Cause**: A method returns a nullable value where a non-nullable is expected.

**Fix**: Use `?? ''` to provide a fallback, or narrow with a null check:

```typescript
writeValue(val: string): void {
  this.value = val ?? '';
}
```

### TS4111 — Index signature property — use bracket notation

```
error TS4111: Property 'check' comes from an index signature, so it
must be accessed with ['check'].
```

**Cause**: Dot notation was used on a `Record<string, T>` or index-signature-typed object (`noPropertyAccessFromIndexSignature`).

**Fix**: Use bracket notation:

```typescript
// Before
const path = ICON_REGISTRY.check;
// After
const path = ICON_REGISTRY['check'];
// Or with a variable:
const path = ICON_REGISTRY[this.name as IconName] ?? '';
```

### TS2515 — Class does not implement ControlValueAccessor

```
error TS2515: Non-abstract class 'MyComponent' does not implement inherited
abstract member 'writeValue' from class 'ControlValueAccessor'.
```

**Cause**: A component declares `implements ControlValueAccessor` but is missing one or more required methods.

**Fix**: Implement all four methods and initialize callbacks to no-ops:

```typescript
export class MyInputComponent implements ControlValueAccessor {
  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: string): void { this.value = val ?? ''; }
  registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void {
    this.state = isDisabled ? 'disabled' : 'default';
  }
}
```
