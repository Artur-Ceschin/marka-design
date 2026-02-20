import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MarkaDialog } from '../components/Dialog'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Tag } from '../components/Tag'

const meta: Meta<typeof MarkaDialog> = {
  title:     'Marka/Dialog',
  component: MarkaDialog,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'birch' },
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof MarkaDialog>

// ── Save to notebook ──────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <MarkaDialog
      trigger={<Button variant="primary" size="lg">Save plant</Button>}
      title="Save to notebook"
      description="Choose which notebook to add this plant to."
    >
      <div className="flex flex-col gap-3">
        {['Field Journal', 'Edible Plants', 'Medicinal Herbs'].map((nb) => (
          <button
            key={nb}
            className="flex items-center justify-between h-12 px-4 rounded-md bg-bg-linen border-[1.5px] border-bg-fog hover:border-bg-bark transition-colors duration-150 text-left font-body text-[13px] text-text-charcoal"
          >
            {nb}
            <span className="text-text-ash">→</span>
          </button>
        ))}
        <Button variant="ghost" size="md" fullWidth className="mt-2">
          + New notebook
        </Button>
      </div>
    </MarkaDialog>
  ),
}

// ── Plant identification result ────────────────────────────────────

export const PlantResult: Story = {
  name: 'Plant Result',
  render: () => (
    <MarkaDialog
      trigger={<Button variant="amber" size="lg">View result</Button>}
      title="Oxalis acetosella"
      description="Wood sorrel · Common throughout Nordic forests"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <Tag variant="green" dot>98% match</Tag>
        <Tag variant="green">Edible</Tag>
        <Tag variant="amber">Medicinal</Tag>
        <Tag variant="neutral">Boreal</Tag>
      </div>
      <p className="font-body text-[13px] text-text-stone leading-relaxed mb-4">
        Found commonly under birch and spruce in boreal forests. Leaves are clover-shaped with a pleasant lemony taste from oxalic acid.
      </p>
      <div className="flex gap-3">
        <Button variant="primary" size="md" fullWidth>Save to journal</Button>
        <Button variant="secondary" size="md" fullWidth>Discard</Button>
      </div>
    </MarkaDialog>
  ),
}

// ── Confirm delete ────────────────────────────────────────────────

export const ConfirmDelete: Story = {
  name: 'Confirm Delete',
  render: () => (
    <MarkaDialog
      trigger={<Button variant="danger" size="md">Delete entry</Button>}
      title="Remove from journal?"
      description="This will permanently delete the entry and all its notes."
    >
      <div className="flex gap-3 mt-2">
        <Button variant="danger" size="md" fullWidth>Yes, remove</Button>
        <Button variant="secondary" size="md" fullWidth>Cancel</Button>
      </div>
    </MarkaDialog>
  ),
}

// ── Add observation note ──────────────────────────────────────────

export const AddNote: Story = {
  name: 'Add Note',
  render: () => (
    <MarkaDialog
      trigger={<Button variant="ghost" size="md">Add note</Button>}
      title="Field observation"
      description="Add notes about where and how you found this plant."
    >
      <div className="flex flex-col gap-3">
        <Input label="Location" placeholder="e.g. Birch forest, north slope" />
        <Input label="Conditions" placeholder="e.g. Damp soil, partial shade" />
        <Button variant="primary" size="lg" fullWidth className="mt-1">Save note</Button>
      </div>
    </MarkaDialog>
  ),
}
