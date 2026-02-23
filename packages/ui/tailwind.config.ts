import type { Config } from 'tailwindcss'
import { markaPreset } from '@marka-app/tokens/tailwind'

const config: Config = {
  presets: [markaPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
}

export default config
