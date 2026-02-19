import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ── COLORS ─────────────────────────────────────────────────
      colors: {
        // Backgrounds
        bg: {
          birch: '#F5F0E8',
          linen: '#EDE7D9',
          fog:   '#E2DDD4',
          bark:  '#D4CCC0',
        },
        // Green — Primary
        green: {
          moss:  '#4A6741',
          sage:  '#7A9E73',
          pale:  '#C8D9C4',
          mist:  '#EBF2EA',
        },
        // Amber — Secondary
        amber: {
          DEFAULT: '#C97B3A',
          pale:    '#F5E6D3',
        },
        // Berry — Tertiary
        berry: {
          DEFAULT: '#8B4F6B',
          pale:    '#F0E4EB',
        },
        // Text
        text: {
          charcoal: '#2C2C2C',
          stone:    '#6B6560',
          ash:      '#9E9992',
          white:    '#FAF8F4',
        },
        // Dark
        dark: {
          forest: '#1A1F16',
          bark:   '#1A1A18',
        },
      },

      // ── TYPOGRAPHY ─────────────────────────────────────────────
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        mono:    ['Courier Prime', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Display
        'display-wordmark': ['36px', { lineHeight: '1.1', letterSpacing: '0' }],
        'display-screen':   ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Heading
        'heading-xl': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-lg': ['18px', { lineHeight: '1.3', letterSpacing: '0' }],
        'heading-md': ['15px', { lineHeight: '1.4', letterSpacing: '0' }],
        'heading-sm': ['13px', { lineHeight: '1.4', letterSpacing: '0' }],
        // Body
        'body-lg':   ['15px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-base': ['13px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-sm':   ['11px', { lineHeight: '1.5', letterSpacing: '0' }],
        // Labels (Courier)
        'label-lg':  ['10px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'label-base':['9px',  { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'label-sm':  ['8px',  { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },

      // ── SPACING ────────────────────────────────────────────────
      spacing: {
        '0.5': '2px',
        '1':   '4px',
        '2':   '8px',
        '3':   '12px',
        '4':   '16px',
        '5':   '20px',
        '6':   '24px',
        '8':   '32px',
        '10':  '40px',
        '12':  '48px',
        '16':  '64px',
        '20':  '80px',
      },

      // ── BORDER RADIUS ─────────────────────────────────────────
      borderRadius: {
        'sm':   '8px',
        'md':   '16px',
        'lg':   '24px',
        'xl':   '32px',
        'full': '9999px',
      },

      // ── SHADOWS ───────────────────────────────────────────────
      boxShadow: {
        'sm':         '0 2px 8px rgba(44,40,35,0.08)',
        'md':         '0 6px 24px rgba(44,40,35,0.12)',
        'lg':         '0 16px 48px rgba(44,40,35,0.18)',
        'green-glow': '0 4px 16px rgba(74,103,65,0.45)',
        'amber-glow': '0 4px 16px rgba(201,123,58,0.35)',
      },

      // ── BORDER WIDTHS ─────────────────────────────────────────
      borderWidth: {
        DEFAULT: '1px',
        '1.5': '1.5px',
        '2':   '2px',
      },

      // ── ANIMATIONS ────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(100px)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 4px 16px rgba(74,103,65,0.45)' },
          '50%':      { boxShadow: '0 4px 24px rgba(74,103,65,0.65)' },
        },
      },
      animation: {
        'fade-in':    'fade-in 0.2s ease-out',
        'scan':       'scan 2s ease-in-out infinite',
        'pulse-green':'pulse-green 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
