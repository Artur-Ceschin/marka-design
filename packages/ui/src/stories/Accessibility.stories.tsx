import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import { Tag, TagGroup } from '../components/Tag'
import { Input } from '../components/Input'
import { Tooltip } from '../components/Tooltip'

const meta: Meta = {
  title:      'Marka/Foundation/Accessibility',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'birch' },
  },
}
export default meta

type Story = StoryObj

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash mb-3">{title}</p>
    {children}
  </div>
)

// ── Focus rings ────────────────────────────────────────────────────

export const FocusRings: Story = {
  name: 'Focus Rings',
  render: () => (
    <div className="max-w-md space-y-6 p-6 bg-bg-birch rounded-lg">
      <Section title="Tab through to see focus rings">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md">Save plant</Button>
          <Button variant="secondary" size="md">View details</Button>
          <Button variant="ghost" size="md">Skip</Button>
        </div>
      </Section>

      <Section title="Tags with keyboard activation">
        <div className="flex flex-wrap gap-2">
          <Tag asToggle variant="green">Edible</Tag>
          <Tag asToggle variant="amber">Medicinal</Tag>
          <Tag asToggle variant="neutral">Native</Tag>
        </div>
      </Section>

      <Section title="Input focus">
        <Input label="Plant name" placeholder="Search plants…" />
      </Section>
    </div>
  ),
}

// ── aria-busy / loading ───────────────────────────────────────────

export const AriaBusy: Story = {
  name: 'aria-busy (Loading buttons)',
  render: () => (
    <div className="flex gap-3 p-6 bg-bg-birch rounded-lg">
      <Button
        variant="primary"
        size="lg"
        loading
        aria-label="Identifying plant…"
      >
        Identify plant
      </Button>
      <Button variant="secondary" size="lg" aria-label="Identify plant">
        Identify plant
      </Button>
    </div>
  ),
}

// ── aria-invalid / error inputs ───────────────────────────────────

export const AriaInvalid: Story = {
  name: 'aria-invalid (Error inputs)',
  render: () => (
    <div className="max-w-xs space-y-4 p-6 bg-bg-birch rounded-lg">
      <Input
        label="Plant name"
        placeholder="Enter name"
        error="Name is required"
        defaultValue=""
      />
      <Input
        label="Location"
        placeholder="Where did you find it?"
        hint="City or GPS coordinates"
      />
    </div>
  ),
}

// ── Tag group with role=group ─────────────────────────────────────

export const TagGroupAccessibility: Story = {
  name: 'TagGroup (arrow-key nav)',
  render: () => {
    function Demo() {
      const [season, setSeason] = React.useState('spring')
      return (
        <div className="p-6 bg-bg-birch rounded-lg space-y-4">
          <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
            Use arrow keys to navigate between chips
          </p>
          <div role="group" aria-label="Season filters">
            <TagGroup type="single" value={season} onValueChange={setSeason}>
              <Tag value="winter" variant="neutral">✦ Winter</Tag>
              <Tag value="spring" variant="neutral">✦ Spring</Tag>
              <Tag value="summer" variant="neutral">✦ Summer</Tag>
              <Tag value="autumn" variant="neutral">✦ Autumn</Tag>
            </TagGroup>
          </div>
          <p className="font-body text-[11px] text-text-stone">
            Selected: <span className="text-green-moss font-medium">{season}</span>
          </p>
        </div>
      )
    }
    return <Demo />
  },
}

// ── Tooltip on hover/focus ────────────────────────────────────────

export const TooltipFocus: Story = {
  name: 'Tooltip (hover & focus)',
  render: () => (
    <div className="flex gap-4 p-6 bg-bg-birch rounded-lg">
      <Tooltip content="Save to field journal">
        <Button variant="primary" size="md" aria-label="Save plant to field journal">
          Save
        </Button>
      </Tooltip>
      <Tooltip content="Mark as favourite" side="right">
        <Button variant="ghost" size="md" aria-label="Mark as favourite">
          ♥ Favourite
        </Button>
      </Tooltip>
    </div>
  ),
}
