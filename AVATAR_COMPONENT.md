# Avatar Component - Added! ✅

## Overview
The Avatar component has been successfully extracted from your Figma design system and added to the Storybook!

**Figma Source:** `node-id=219-440`

---

## Features

### 3 Size Variants
- **Small** (16x16px)
- **Medium** (24x24px) 
- **Large** (32x32px)

### 3 Content Types
- **Text** - Display initials (purple background #e4d8fe)
- **Icon** - Default user icon (gray background #f1f1f1)
- **Image** - Profile picture

### Optional Badges
- **Status Indicator** - Green dot showing online status
  - Online (green #008a22)
  - Offline (gray)
  - Away (yellow)
  - Busy (red)
- **Notification Badge** - Purple badge with count (e.g., "999+")

---

## Design Tokens (from Figma)

```typescript
// Colors
primary/20: #e4d8fe  // Text avatar background
primary/50: #783ef9  // Notification badge background
primary/60: #2c00ac  // Text color in avatar
neutral/10: #ffffff  // White borders
neutral/20: #f1f1f1  // Icon avatar background
neutral/50: #757575  // Icon color
alert/success: #008a22  // Status indicator

// Typography
caption/large: 12px, Roboto, Regular, 400

// Border Radius
radius-999: 999px (fully rounded)
```

---

## Usage Examples

### Basic Text Avatar
```tsx
<Avatar 
  type="text" 
  size="medium" 
  text="JD" 
/>
```

### Image Avatar with Status
```tsx
<Avatar 
  type="image" 
  size="large"
  imageSrc="/path/to/image.jpg"
  showStatus
  status="online"
/>
```

### Icon Avatar with Notification
```tsx
<Avatar 
  type="icon" 
  size="medium"
  showNotification
  notificationCount="5"
/>
```

### Complete Example (All Features)
```tsx
<Avatar 
  type="image"
  size="large"
  imageSrc="https://example.com/profile.jpg"
  showStatus
  status="online"
  showNotification
  notificationCount="999+"
/>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Avatar size |
| `type` | `'text' \| 'icon' \| 'image'` | `'text'` | Content type |
| `text` | `string` | `'A'` | Text to display (for text type) |
| `imageSrc` | `string` | - | Image URL (for image type) |
| `imageAlt` | `string` | `'Avatar'` | Image alt text |
| `showNotification` | `boolean` | `false` | Show notification badge |
| `notificationCount` | `string \| number` | `'999+'` | Badge count text |
| `showStatus` | `boolean` | `false` | Show status indicator |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | `'online'` | Status type |
| `className` | `string` | `''` | Additional CSS class |

---

## Storybook Stories

All variants from your Figma are available in Storybook:

- **Text Avatars** - Small, Medium, Large
- **Icon Avatars** - Small, Medium, Large
- **Image Avatars** - Small, Medium, Large
- **With Status** - Online, Offline, Away, Busy
- **With Notification** - Various counts
- **Combined** - Status + Notification
- **All Variants Showcase** - Matrix view like Figma

---

## Visual Match with Figma

The component perfectly matches your Figma design:

✅ Exact colors (primary purple, text colors, backgrounds)
✅ Precise sizing (16px, 24px, 32px)
✅ Notification badge positioning
✅ Status indicator with check icon
✅ Border radius (999px for full circle)
✅ Typography (Roboto 12px for text)
✅ Borders on badges (1px white)

---

## Files Created

```
src/components/Avatar/
├── Avatar.tsx          # Component logic & props
├── Avatar.css          # Figma-accurate styles
└── Avatar.stories.tsx  # Storybook stories
```

---

## What's Next?

You now have **7 components** complete:
1. ✅ Avatar (NEW!)
2. ✅ Button
3. ✅ Card
4. ✅ Input
5. ✅ Checkbox
6. ✅ Badge
7. ✅ Switch

**10 more to go:**
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

Share more Figma URLs with selected components and I'll add them!

---

## Testing in Storybook

```bash
npm run storybook
```

Then navigate to **Components > Avatar** to see all variants!
