import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MarkaSelect } from '../components/Select'

const meta: Meta<typeof MarkaSelect> = {
  title:     'Marka/Select',
  component: MarkaSelect,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'birch' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 280, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof MarkaSelect>

export const Default: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('')
      return (
        <MarkaSelect
          label="Season"
          placeholder="Select season…"
          options={[
            { value: 'winter', label: '✦ Winter' },
            { value: 'spring', label: '✦ Spring' },
            { value: 'summer', label: '✦ Summer' },
            { value: 'autumn', label: '✦ Autumn' },
          ]}
          value={value}
          onValueChange={setValue}
        />
      )
    }
    return <Demo />
  },
}

// ── Ecosystem picker ──────────────────────────────────────────────

export const WithGroups: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('')
      return (
        <MarkaSelect
          label="Ecosystem"
          placeholder="Select ecosystem…"
          groups={[
            {
              label: 'Nordic',
              options: [
                { value: 'boreal', label: 'Boreal Forest' },
                { value: 'tundra', label: 'Arctic Tundra' },
                { value: 'fjord',  label: 'Fjord Valley' },
              ],
            },
            {
              label: 'Wetlands',
              options: [
                { value: 'bog',    label: 'Peat Bog' },
                { value: 'marsh',  label: 'Coastal Marsh' },
              ],
            },
          ]}
          value={value}
          onValueChange={setValue}
        />
      )
    }
    return <Demo />
  },
}

export const Disabled: Story = {
  render: () => (
    <MarkaSelect
      label="Region"
      placeholder="Not available"
      options={[{ value: 'nordic', label: 'Nordic' }]}
      disabled
    />
  ),
}

export const Preselected: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('spring')
      return (
        <MarkaSelect
          label="Season"
          options={[
            { value: 'winter', label: '✦ Winter' },
            { value: 'spring', label: '✦ Spring' },
            { value: 'summer', label: '✦ Summer' },
            { value: 'autumn', label: '✦ Autumn' },
          ]}
          value={value}
          onValueChange={setValue}
        />
      )
    }
    return <Demo />
  },
}
