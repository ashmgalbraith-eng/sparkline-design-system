# Sparkline Design System - Quick Start Guide

## ✅ Your Storybook is Ready!

I've created a complete React + TypeScript component library with Storybook based on your Figma design system.

## 📦 What's Inside

### Components (6 ready to use):
1. **Button** - With your Figma design (purple #783ef9)
   - 3 variants: filled, outlined, text
   - 3 sizes: small, medium, large
   - Icon support (left & right)
   - All states: default, hover, pressed, disabled

2. **Card** - Flexible container
   - 3 variants: elevated, outlined, filled
   - Optional image, title, content, footer
   - Clickable with hover effects

3. **Input** - Form input
   - Label, placeholder, helper text
   - Error & success states
   - Left & right icons
   - 3 sizes

4. **Checkbox** - Selection control
   - Indeterminate state support
   - Disabled state

5. **Badge** - Status indicators
   - 6 color variants
   - 3 sizes
   - Dot variant

6. **Switch** - Toggle control
   - 3 sizes
   - Smooth animations

### Design Tokens
Located in `src/tokens/tokens.ts`:
- Primary color: #783ef9 (from your Figma)
- Typography (Roboto & Manrope)
- Spacing scale
- Border radius
- Shadows

## 🚀 How to Run

### Step 1: Install Dependencies
```bash
cd sparkline-storybook
npm install
```

### Step 2: Start Storybook
```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### Step 3: Explore Components
- Click on each component in the sidebar
- Use the **Controls** panel to modify props
- Switch to **Docs** tab for documentation
- Try different viewports using the toolbar

## 🎨 Customize to Match Figma Exactly

### Update Design Tokens
Open `src/tokens/tokens.ts` and update:

```typescript
export const colors = {
  primary: {
    50: '#783ef9', // Your Figma primary color
    // Add more shades from Figma
  },
  // Add more color tokens
};
```

### Update Component Styles
Each component has a `.css` file. For example, `Button.css`:
- Compare with Figma Dev Mode
- Update colors, spacing, typography
- Adjust hover and active states

## 📋 Add More Components

You mentioned these components in your design system:
- Avatar
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

### To add a component:
1. Select it in Figma
2. Share the URL with node-id (like the Button URL you shared)
3. I can generate the exact code for it!

## 🔧 Project Structure

```
sparkline-storybook/
├── src/
│   ├── components/        # All components here
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── ...
│   ├── tokens/           # Design tokens
│   ├── styles/           # Global styles
│   └── index.ts          # Component exports
├── .storybook/           # Storybook config
├── package.json
└── README.md
```

## 💡 Next Steps

1. **Run Storybook** - See your components in action
2. **Update tokens** - Match exact Figma values
3. **Share more Figma URLs** - I'll add remaining components
4. **Customize** - Adjust any styling as needed
5. **Use in your app** - Import components: `import { Button } from './src'`

## 🆘 Need Help?

### Common Issues:

**Port already in use?**
```bash
npm run storybook -- -p 6007
```

**Styling looks off?**
- Check `src/tokens/tokens.ts` matches Figma
- Compare CSS files with Figma Dev Mode

**Want to add components?**
- Share Figma URLs with specific components selected
- I'll generate the exact code

## 🎯 What to Share for More Components

For each component you want, share a Figma URL like:
```
https://www.figma.com/design/aY6PTxhYjhJhxUgH77u0b1/...?node-id=XX-XXX
```

Make sure:
1. Component is selected in Figma
2. You're in Dev Mode
3. File sharing is enabled

---

🎉 **You're all set!** Run `npm install && npm run storybook` to get started.
