import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup } from '../components/Tag'

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

export const AsToggle: Story = {
  name: 'AsToggle (aria-pressed)',
  render: () => {
    function Demo() {
      const [active, setActive] = React.useState(false)
      return (
        <div className="flex flex-col gap-4 p-6 bg-bg-birch rounded-lg">
          <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
            Radix Toggle — aria-pressed, keyboard activation (Space/Enter)
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag
              asToggle
              pressed={active}
              onPressedChange={setActive}
              variant="green"
            >
              ✦ Edible
            </Tag>
            <Tag asToggle variant="amber">Medicinal</Tag>
            <Tag asToggle variant="neutral">Native</Tag>
          </div>
          <p className="font-body text-[11px] text-text-stone">
            First chip: {active ? 'pressed (on)' : 'unpressed (off)'}
          </p>
        </div>
      )
    }
    return <Demo />
  },
}

// ── TagGroup: keyboard-navigable filter chips ─────────────────────

export const TagGroupStory: Story = {
  name: 'TagGroup (arrow-key navigation)',
  render: () => {
    function Demo() {
      const [season, setSeason] = React.useState('spring')
      const [tags,   setTags]   = React.useState<string[]>(['edible'])

      return (
        <div className="flex flex-col gap-6 p-6 bg-bg-birch rounded-lg">
          <div>
            <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-2">
              Single select — arrow keys navigate, Space/Enter selects
            </p>
            <div role="group" aria-label="Season filters">
              <TagGroup type="single" value={season} onValueChange={setSeason}>
                <Tag value="winter" variant="neutral">✦ Winter</Tag>
                <Tag value="spring" variant="neutral">✦ Spring</Tag>
                <Tag value="summer" variant="neutral">✦ Summer</Tag>
                <Tag value="autumn" variant="neutral">✦ Autumn</Tag>
              </TagGroup>
            </div>
            <p className="font-body text-[11px] text-text-stone mt-2">
              Selected: <span className="text-green-moss font-medium">{season}</span>
            </p>
          </div>

          <div>
            <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-2">
              Multi select
            </p>
            <div role="group" aria-label="Classification filters">
              <TagGroup type="multiple" value={tags} onValueChange={setTags}>
                <Tag value="edible"    variant="green">Edible</Tag>
                <Tag value="medicinal" variant="amber">Medicinal</Tag>
                <Tag value="toxic"     variant="berry">Toxic</Tag>
                <Tag value="native"    variant="neutral">Native</Tag>
              </TagGroup>
            </div>
            <p className="font-body text-[11px] text-text-stone mt-2">
              Selected: <span className="text-green-moss font-medium">{tags.join(', ') || 'none'}</span>
            </p>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ── All variants ──────────────────────────────────────────────────

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
          <Tag variant="green" dot>98% match</Tag>
          <Tag variant="amber" dot>74% match</Tag>
          <Tag variant="berry" dot>41% match</Tag>
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
