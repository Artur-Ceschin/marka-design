import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title:     'Marka/Button',
  component: Button,
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
      options: ['primary','secondary','ghost','amber','danger','subtle'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xl','lg','md','sm','xs'],
    },
    loading:  { control: 'boolean' },
    fullWidth:{ control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Button>

// ── STORIES ──────────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', children: 'Save plant', size: 'lg' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'View details', size: 'lg' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'View all', size: 'lg' },
}

export const Amber: Story = {
  args: { variant: 'amber', children: 'Add note', size: 'lg' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: 'Remove', size: 'lg' },
}

export const Loading: Story = {
  args: { variant: 'primary', children: 'Identifying…', size: 'lg', loading: true },
}

export const FullWidth: Story = {
  args: { variant: 'primary', children: 'Sign in to Marka', size: 'xl', fullWidth: true },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-6 bg-bg-birch rounded-lg">
      <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-2">All Variants</p>
      <Button variant="primary">Save plant</Button>
      <Button variant="secondary">View details</Button>
      <Button variant="ghost">View all</Button>
      <Button variant="amber">Add note</Button>
      <Button variant="danger">Remove</Button>
      <Button variant="subtle">Skip</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3 p-6 bg-bg-birch rounded-lg">
      <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-2">All Sizes</p>
      <Button variant="primary" size="xl">Extra Large</Button>
      <Button variant="primary" size="lg">Large (default)</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="xs">Extra Small</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3 p-6 bg-bg-birch rounded-lg">
      <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-2">With Icons</p>
      <Button variant="primary" icon={<span>🌿</span>}>Save to notebook</Button>
      <Button variant="secondary" iconRight={<span>→</span>}>View all finds</Button>
      <Button variant="amber" icon={<span>+</span>}>Add a note</Button>
    </div>
  ),
}
