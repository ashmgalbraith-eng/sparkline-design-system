/**
 * Design Tokens for Sparkline Design System
 * Token format: $category-shade (e.g., $primary-50)
 */

export const colors = {
  // Primary Colors - Purple scale
  'primary-10': '#F1ECFE',
  'primary-20': '#E4D8FE',
  'primary-30': '#C9B2FD',
  'primary-40': '#A078FB',
  'primary-50': '#783EF9',
  'primary-60': '#2C00AC',
  'primary-70': '#00007A',
  'primary-80': '#000060',
  'primary-90': '#000047',
  
  // Secondary Colors - Magenta/Pink scale
  'secondary-10': '#FBE5F6',
  'secondary-20': '#F8CCEC',
  'secondary-30': '#F4B2E3',
  'secondary-40': '#ED80D0',
  'secondary-50': '#DB00A1',
  'secondary-60': '#8E0055',
  'secondary-70': '#75003B',
  'secondary-80': '#5C0022',
  'secondary-90': '#420008',
  
  // Neutral Colors - Grayscale
  'neutral-10': '#FFFFFF',
  'neutral-20': '#F1F1F1',
  'neutral-30': '#D6D6D6',
  'neutral-40': '#BABABA',
  'neutral-50': '#757575',
  'neutral-60': '#626060',
  'neutral-70': '#3D3D3D',
  'neutral-80': '#303030',
  'neutral-90': '#000000',
  
  // Alert Colors - Semantic
  'alert-info': '#006ADB',
  'alert-success': '#008A22',
  'alert-warning': '#AC6502',
  'alert-error': '#EA0606',
};

export const spacing = {
  'spacing-xs': '4px',
  'spacing-sm': '8px',
  'spacing-md': '16px',
  'spacing-lg': '24px',
  'spacing-xl': '32px',
};

export const borderRadius = {
  'radius-sm': '2px',
  'radius-md': '4px',
  'radius-lg': '8px',
  'radius-xl': '12px',
  'radius-full': '999px',
};

// ─── Primitive Typography ─────────────────────────────────────────────────────
// Raw, nameless values with no usage context. Mirrors the Figma variable panel.

export const primitiveTypography = {
  fontFamily: {
    base: 'Roboto, sans-serif',
  },
  fontSize: {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '24': '24px',
    '32': '32px',
    '40': '40px',
    '48': '48px',
    '56': '56px',
  },
  fontWeight: {
    thin:       100,
    extraLight: 200,
    light:      300,
    regular:    400,
    medium:     500,
    semibold:   600,
    bold:       700,
    extraBold:  800,
    black:      900,
  },
};

// ─── Semantic Typography Tokens ───────────────────────────────────────────────
// Named, purposeful styles that compose primitives. Mirror Figma text style names.
// Responsive styles (display, headline-1–3) use nested lg/md/sm breakpoint objects.
// Static styles (headline-4+) are flat — values are identical across breakpoints.
// Breakpoints: lg = desktop >1024px, md = tablet 768–1024px, sm = mobile <768px

export const typographyTokens = {
  // Responsive — size changes per breakpoint
  display: {
    lg: { fontFamily: 'Roboto', fontSize: '56px', fontWeight: 800, lineHeight: '100%',  letterSpacing: '0' },
    md: { fontFamily: 'Roboto', fontSize: '48px', fontWeight: 800, lineHeight: '110%',  letterSpacing: '0' },
    sm: { fontFamily: 'Roboto', fontSize: '40px', fontWeight: 800, lineHeight: '115%',  letterSpacing: '0' },
  },
  'headline-1': {
    lg: { fontFamily: 'Roboto', fontSize: '48px', fontWeight: 700, lineHeight: '100%',  letterSpacing: '0' },
    md: { fontFamily: 'Roboto', fontSize: '40px', fontWeight: 700, lineHeight: '115%',  letterSpacing: '-1px' },
    sm: { fontFamily: 'Roboto', fontSize: '32px', fontWeight: 700, lineHeight: '120%',  letterSpacing: '-0.5px' },
  },
  'headline-2': {
    lg: { fontFamily: 'Roboto', fontSize: '40px', fontWeight: 700, lineHeight: '100%',  letterSpacing: '0' },
    md: { fontFamily: 'Roboto', fontSize: '32px', fontWeight: 700, lineHeight: '120%',  letterSpacing: '-0.5px' },
    sm: { fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '125%',  letterSpacing: '0' },
  },
  'headline-3': {
    lg: { fontFamily: 'Roboto', fontSize: '32px', fontWeight: 700, lineHeight: '100%',  letterSpacing: '0' },
    md: { fontFamily: 'Roboto', fontSize: '24px', fontWeight: 700, lineHeight: '100%',  letterSpacing: '0' },
    sm: { fontFamily: 'Roboto', fontSize: '20px', fontWeight: 700, lineHeight: '100%',  letterSpacing: '0' },
  },
  // Static — same across all breakpoints
  'headline-4': { fontFamily: 'Roboto', fontSize: '20px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0' },
  'subtitle-1': { fontFamily: 'Roboto', fontSize: '18px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0' },
  label:        { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0' },
  'body-1':     { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '24px',  letterSpacing: '0' },
  'body-2':     { fontFamily: 'Roboto', fontSize: '14px', fontWeight: 400, lineHeight: '20px',  letterSpacing: '0' },
  caption:      { fontFamily: 'Roboto', fontSize: '12px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0' },
  button:       { fontFamily: 'Roboto', fontSize: '16px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0' },
};

/** @deprecated Use primitiveTypography and typographyTokens instead */
export const typography = {
  fontFamily: {
    primary: primitiveTypography.fontFamily.base,
    secondary: 'Manrope, sans-serif',
  },
  'button-large': typographyTokens.button,
  'caption-large': typographyTokens.caption,
};

export const shadows = {
  'shadow-button': '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

// ─── Semantic Color Tokens ────────────────────────────────────────────────────
// Light and dark theme values. Use these in components rather than primitives.

export const colorTokensLight = {
  // Border
  'color-border-default':  '#783EF9', // primary-50
  'color-border-subtle':   '#D6D6D6', // neutral-30
  'color-border-strong':   '#303030', // neutral-80
  'color-border-disabled': '#BABABA', // neutral-40
  'color-border-inverse':  '#FFFFFF', // neutral-10

  // Feedback — text
  'color-text-error':   '#EA0606', // alert-error
  'color-text-success': '#008A22', // alert-success
  'color-text-warning': '#AC6502', // alert-warning
  'color-text-info':    '#006ADB', // alert-info

  // Feedback — surfaces
  'color-surface-error':   '#EA0606', // alert-error
  'color-surface-success': '#008A22', // alert-success
  'color-surface-warning': '#AC6502', // alert-warning
  'color-surface-info':    '#006ADB', // alert-info

  // Feedback — borders
  'color-border-error':   '#EA0606', // alert-error
  'color-border-success': '#008A22', // alert-success
  'color-border-warning': '#AC6502', // alert-warning
  'color-border-info':    '#006ADB', // alert-info

  // Surface
  'color-surface-default':         '#FFFFFF', // neutral-10
  'color-surface-subtle':          '#F1F1F1', // neutral-20
  'color-surface-overlay':         '#BABABA', // neutral-40
  'color-surface-inverse':         '#303030', // neutral-80
  'color-surface-disabled':        '#BABABA', // neutral-40
  'color-surface-subtle-disabled': '#FFFFFF', // neutral-10
  'color-surface-brand':           '#783EF9', // primary-50
  'color-surface-brand-subtle':    '#E4D8FE', // primary-20

  // Text
  'color-text-primary':      '#303030', // neutral-80
  'color-text-secondary':    '#757575', // neutral-50
  'color-text-inverse':      '#FFFFFF', // neutral-10
  'color-text-disabled':     '#BABABA', // neutral-40
  'color-text-on-disabled':  '#F1F1F1', // neutral-20
  'color-text-brand':        '#783EF9', // primary-50

  // Control
  'color-control-track':          '#BABABA', // neutral-40
  'color-control-track-active':   '#783EF9', // primary-50
  'color-control-track-inactive': '#E4D8FE', // primary-20
  'color-control-track-disabled': '#F1F1F1', // neutral-20
  'color-control-thumb-inverse':  '#FFFFFF', // neutral-10
  'color-control-thumb-brand':    '#783EF9', // primary-50
  'color-control-thumb-disabled': '#D6D6D6', // neutral-30

  // Action
  'color-action-brand-border':    '#2C00AC', // primary-60
  'color-action-brand-text':      '#2C00AC', // primary-60
  'color-action-subtle-hover-bg': '#F1F1F1', // neutral-20
  'color-action-strong-hover-bg': '#D6D6D6', // neutral-30
  'color-action-strong-text':     '#303030', // neutral-80
  'color-action-strong-border':   '#303030', // neutral-80
  'color-action-subtle-focus':    '#F1F1F1', // neutral-20
  'color-surface-hover-bg':       '#E4D8FE', // primary-20
};

export const colorTokensDark = {
  // Border
  'color-border-default':  '#A078FB', // primary-40
  'color-border-subtle':   '#757575', // neutral-50
  'color-border-strong':   '#F1F1F1', // neutral-20
  'color-border-disabled': '#626060', // neutral-60
  'color-border-inverse':  '#000047', // primary-90

  // Feedback — text
  'color-text-error':   '#FF6B6B',
  'color-text-success': '#4ADE80',
  'color-text-warning': '#FBB848',
  'color-text-info':    '#60A5FA',

  // Feedback — surfaces
  'color-surface-error':   '#FF6B6B',
  'color-surface-success': '#4ADE80',
  'color-surface-warning': '#FBB848',
  'color-surface-info':    '#60A5FA',

  // Feedback — borders
  'color-border-error':   '#FF6B6B',
  'color-border-success': '#4ADE80',
  'color-border-warning': '#FBB848',
  'color-border-info':    '#60A5FA',

  // Surface
  'color-surface-default':         '#000000', // neutral-90
  'color-surface-subtle':          '#303030', // neutral-80
  'color-surface-overlay':         '#3D3D3D', // neutral-70
  'color-surface-inverse':         '#F1F1F1', // neutral-20
  'color-surface-disabled':        '#3D3D3D', // neutral-70
  'color-surface-subtle-disabled': '#303030', // neutral-80
  'color-surface-brand':           '#A078FB', // primary-40
  'color-surface-brand-subtle':    '#783EF9', // primary-50

  // Text
  'color-text-primary':      '#FFFFFF', // neutral-10
  'color-text-secondary':    '#BABABA', // neutral-40
  'color-text-inverse':      '#000000', // neutral-90
  'color-text-disabled':     '#626060', // neutral-60
  'color-text-on-disabled':  '#757575', // neutral-50
  'color-text-brand':        '#C9B2FD', // primary-30

  // Control
  'color-control-track':          '#626060', // neutral-60
  'color-control-track-active':   '#A078FB', // primary-40
  'color-control-track-inactive': '#000060', // primary-80
  'color-control-track-disabled': '#3D3D3D', // neutral-70
  'color-control-thumb-inverse':  '#000000', // neutral-90
  'color-control-thumb-brand':    '#A078FB', // primary-40
  'color-control-thumb-disabled': '#3D3D3D', // neutral-70

  // Action
  'color-action-brand-border':    '#A078FB', // primary-40
  'color-action-brand-text':      '#C9B2FD', // primary-30
  'color-action-subtle-hover-bg': '#3D3D3D', // neutral-70
  'color-action-strong-hover-bg': '#626060', // neutral-60
  'color-action-strong-text':     '#FFFFFF', // neutral-10
  'color-action-strong-border':   '#F1F1F1', // neutral-20
  'color-action-subtle-focus':    '#3D3D3D', // neutral-70
  'color-surface-hover-bg':       '#000060', // primary-80
};

/** @deprecated Use colorTokensLight or colorTokensDark instead */
export const colorTokens = colorTokensLight;
