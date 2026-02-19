import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../components/Tag'

const meta: Meta<typeof Tag> = {
  title:     'Marka/Tag',
  component: Tag,
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
      options: ['green','amber','berry','dark','neutral'],
    },
    size: {
      control: 'select',
      options: ['md','sm'],
    },
    dot:      { control: 'boolean' },
    children: { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Tag>

export const Green: Story = {
  args: { variant: 'green', children: 'Edible', dot: false },
}

export const Amber: Story = {
  args: { variant: 'amber', children: 'Medicinal', dot: false },
}

export const Berry: Story = {
  args: { variant: 'berry', children: 'Toxic ⚠', dot: false },
}

export const WithDot: Story = {
  args: { variant: 'green', children: '98% match', dot: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-bg-birch rounded-lg">
      <div>
        <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-3">Classification Tags</p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green">Edible</Tag>
          <Tag variant="green">Boreal</Tag>
          <Tag variant="green">Native</Tag>
          <Tag variant="amber">Medicinal</Tag>
          <Tag variant="amber">Rare</Tag>
          <Tag variant="berry">Toxic ⚠</Tag>
          <Tag variant="berry">Invasive</Tag>
        </div>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-3">Confidence Badges</p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="green" dot>● 98% match</Tag>
          <Tag variant="amber" dot>● 74% match</Tag>
          <Tag variant="berry" dot>● 41% match</Tag>
          <Tag variant="dark">AI Identified</Tag>
        </div>
      </div>

      <div>
        <p className="font-mono text-[8px] tracking-widest text-text-ash uppercase mb-3">Sizes</p>
        <div className="flex flex-wrap gap-2 items-center">
          <Tag variant="green" size="md">Medium tag</Tag>
          <Tag variant="green" size="sm">Small tag</Tag>
        </div>
      </div>
    </div>
  ),
}
