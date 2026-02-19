import type { Preview } from '@storybook/react'
import '../src/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'birch',
      values: [
        { name: 'birch',  value: '#F5F0E8' },
        { name: 'linen',  value: '#EDE7D9' },
        { name: 'white',  value: '#FFFFFF' },
        { name: 'forest', value: '#1A1F16' },
        { name: 'dark',   value: '#1E1E1A' },
      ],
    },

    // Global layout padding
    layout: 'padded',

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      name:        'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon:  'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
}

export default preview
