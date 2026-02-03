# Sparkline Design System - Storybook

A complete React component library based on the Sparkline Design System from Figma.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build Storybook

```bash
npm run build-storybook
```

## 📦 Components

Currently implemented components:

- ✅ **Avatar** - Profile avatars with text, icon, or image, plus status and notification badges
- ✅ **Button** - Full-featured button with variants (filled, outlined, text), sizes, states, and icon support
- ✅ **Card** - Flexible card component with variants, images, and footer actions
- ✅ **Input** - Text input with label, helper text, error states, and icon support
- ✅ **Checkbox** - Checkbox with label, indeterminate state, and disabled state
- ✅ **Badge** - Status indicators with multiple color variants
- ✅ **Switch** - Toggle switch with smooth animations

### Components to Add (from your design system):

- Button Group
- Card Select
- Chip
- Menu
- Radio Button
- Select
- Slider
- Stepper
- Tabs
- Tooltip

## 🎨 Design Tokens

Design tokens are defined in `src/tokens/tokens.ts` and include:

- **Colors**: Primary, neutral scales
- **Spacing**: Consistent spacing scale
- **Typography**: Font families and sizes
- **Shadows**: Elevation system
- **Border Radius**: Rounding values

### Updating Design Tokens from Figma

To match your exact Figma specifications:

1. Open your Figma file in Dev Mode
2. Select any component
3. View the design tokens (colors, spacing, typography)
4. Update the values in `src/tokens/tokens.ts`

Example:
```typescript
export const colors = {
  primary: {
    50: '#783ef9', // Update this hex value from Figma
  },
  // Add more colors from your Figma variables
};
```

## 🔧 Project Structure

```
sparkline-storybook/
├── .storybook/           # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/       # All React components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── Button.stories.tsx
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Checkbox/
│   ├── tokens/          # Design tokens
│   │   └── tokens.ts
│   ├── styles/          # Global styles
│   │   └── global.css
│   └── index.ts         # Main export file
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 💻 Using Components in Your Project

### Import Components

```typescript
import { Button, Card, Input, Checkbox } from './src';
```

### Button Example

```tsx
<Button
  label="Click Me"
  size="large"
  variant="filled"
  showRightIcon
  onClick={() => console.log('clicked')}
/>
```

### Card Example

```tsx
<Card
  title="Card Title"
  variant="elevated"
  imageSrc="https://example.com/image.jpg"
  footer={<Button label="Action" />}
>
  Card content goes here
</Card>
```

### Input Example

```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  onChange={(e) => console.log(e.target.value)}
/>
```

## 🎯 Next Steps

### 1. Update Design Tokens
- Open `src/tokens/tokens.ts`
- Replace placeholder values with exact values from your Figma design system
- Add any missing color scales, spacing values, or typography definitions

### 2. Fetch More Components from Figma
If you can share specific component URLs from Figma, I can generate the exact code for:
- Avatar
- Badge
- Button Group
- Select
- Tabs
- Tooltip
- And all other components in your design system

### 3. Customize Styling
Each component has its own CSS file that you can modify to match your exact design specifications.

### 4. Add More Variants
Components are built to be extensible. You can add more size variants, color schemes, or states as needed.

## 📝 Component Development

To add a new component:

1. Create a folder in `src/components/[ComponentName]/`
2. Create `[ComponentName].tsx` - The React component
3. Create `[ComponentName].css` - Component styles
4. Create `[ComponentName].stories.tsx` - Storybook stories
5. Export from `src/index.ts`

## 🔍 Storybook Features

- **Controls**: Modify component props in real-time
- **Docs**: Auto-generated documentation for each component
- **Actions**: View event callbacks in the actions panel
- **Multiple viewports**: Test responsive behavior
- **Accessibility checks**: Built-in a11y testing

## 🤝 Contributing

This is your design system! Feel free to:
- Add new components
- Update existing components to match Figma exactly
- Add new variants or props
- Improve documentation

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Figma Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)

## 🐛 Troubleshooting

### Storybook won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run storybook
```

### Components look different from Figma
Check the CSS files and compare with Figma Dev Mode values. Update colors, spacing, and typography to match exactly.

### TypeScript errors
Make sure all dependencies are installed and tsconfig.json is properly configured.

---

Built with ❤️ for the Sparkline Design System
