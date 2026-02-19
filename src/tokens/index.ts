// ── COLORS ──────────────────────────────────────────────────────
export const colors = {
  bg: {
    birch: '#F5F0E8',
    linen: '#EDE7D9',
    fog:   '#E2DDD4',
    bark:  '#D4CCC0',
  },
  green: {
    moss:  '#4A6741',
    sage:  '#7A9E73',
    pale:  '#C8D9C4',
    mist:  '#EBF2EA',
  },
  amber: {
    DEFAULT: '#C97B3A',
    pale:    '#F5E6D3',
  },
  berry: {
    DEFAULT: '#8B4F6B',
    pale:    '#F0E4EB',
  },
  text: {
    charcoal: '#2C2C2C',
    stone:    '#6B6560',
    ash:      '#9E9992',
    white:    '#FAF8F4',
  },
  dark: {
    forest: '#1A1F16',
    bark:   '#1A1A18',
  },
} as const

// ── TYPOGRAPHY ──────────────────────────────────────────────────
export const fonts = {
  display: '"Playfair Display", Georgia, serif',
  body:    '"DM Sans", system-ui, sans-serif',
  mono:    '"Courier Prime", "Courier New", monospace',
} as const

export const fontSizes = {
  'display-wordmark': '36px',
  'display-screen':   '28px',
  'heading-xl':       '22px',
  'heading-lg':       '18px',
  'heading-sm':       '13px',
  'body-lg':          '15px',
  'body-base':        '13px',
  'body-sm':          '11px',
  'label-lg':         '10px',
  'label-base':       '9px',
  'label-sm':         '8px',
} as const

// ── SPACING ─────────────────────────────────────────────────────
export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  8:  '32px',
  10: '40px',
  12: '48px',
} as const

// ── BORDER RADIUS ───────────────────────────────────────────────
export const radius = {
  sm:   '8px',
  md:   '16px',
  lg:   '24px',
  xl:   '32px',
  full: '9999px',
} as const

// ── SHADOWS ─────────────────────────────────────────────────────
export const shadows = {
  sm:         '0 2px 8px rgba(44,40,35,0.08)',
  md:         '0 6px 24px rgba(44,40,35,0.12)',
  lg:         '0 16px 48px rgba(44,40,35,0.18)',
  greenGlow:  '0 4px 16px rgba(74,103,65,0.45)',
  amberGlow:  '0 4px 16px rgba(201,123,58,0.35)',
} as const

// ── BORDER WIDTHS ───────────────────────────────────────────────
export const borderWidth = {
  default: '1px',
  md:      '1.5px',
  lg:      '2px',
} as const

// ── COMBINED EXPORT ─────────────────────────────────────────────
export const tokens = {
  colors,
  fonts,
  fontSizes,
  spacing,
  radius,
  shadows,
  borderWidth,
} as const

export type Colors     = typeof colors
export type Fonts      = typeof fonts
export type Spacing    = typeof spacing
export type Radius     = typeof radius
export type Shadows    = typeof shadows
