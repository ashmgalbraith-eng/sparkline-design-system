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

export const typography = {
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: 'Manrope, sans-serif',
  },
  'button-large': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '100%',
    letterSpacing: '0',
  },
  'caption-large': {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '100%',
    letterSpacing: '0',
  },
};

export const shadows = {
  'shadow-button': '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};
