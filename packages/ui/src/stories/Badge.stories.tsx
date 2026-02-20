import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/Badge'

const meta: Meta<typeof Badge> = {
  title:     'Marka/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'birch',
      values: [
        { name: 'birch',  value: '#F5F0E8' },
        { name: 'forest', value: '#1A1F16' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['green', 'amber', 'berry', 'dark', 'neutral'],
      description: 'Color variant',
    },
    dot:      { control: 'boolean', description: 'Show status dot' },
    pulse:    { control: 'boolean', description: 'Animate dot (live state)' },
    children: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const HighConfidence: Story = {
  args: { variant: 'green', dot: true, children: '97% match' },
}

export const MediumConfidence: Story = {
  args: { variant: 'amber', dot: true, children: '74% match' },
}

export const LowConfidence: Story = {
  args: { variant: 'berry', dot: true, children: '41% match' },
}

export const AIIdentified: Story = {
  args: { variant: 'dark', dot: false, children: 'AI Identified' },
}

export const Scanning: Story = {
  args: { variant: 'green', dot: true, pulse: true, children: 'Scanning…' },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-bg-birch rounded-lg">
      <div>
        <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-3">
          Confidence Levels
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="green" dot>97% match</Badge>
          <Badge variant="amber" dot>74% match</Badge>
          <Badge variant="berry" dot>41% match</Badge>
        </div>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-3">
          Status Badges
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="green" dot pulse>Scanning…</Badge>
          <Badge variant="dark">AI Identified</Badge>
          <Badge variant="neutral">Manual Entry</Badge>
        </div>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-3">
          All Variants (no dot)
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="green">Edible</Badge>
          <Badge variant="amber">Medicinal</Badge>
          <Badge variant="berry">Toxic</Badge>
          <Badge variant="dark">Rare</Badge>
          <Badge variant="neutral">Common</Badge>
        </div>
      </div>
    </div>
  ),
}
