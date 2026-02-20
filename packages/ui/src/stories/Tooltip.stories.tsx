import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '../components/Tooltip'
import { Button } from '../components/Button'

const meta: Meta<typeof Tooltip> = {
  title:     'Marka/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'birch' },
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Save to field journal">
      <Button variant="primary" size="lg">Save plant</Button>
    </Tooltip>
  ),
}

export const Sides: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-12">
      <Tooltip content="Tooltip on top" side="top">
        <Button variant="secondary" size="md">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" side="right">
        <Button variant="secondary" size="md">Right</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" side="bottom">
        <Button variant="secondary" size="md">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" side="left">
        <Button variant="secondary" size="md">Left</Button>
      </Tooltip>
    </div>
  ),
}

export const OnIconButton: Story = {
  render: () => (
    <Tooltip content="Identify this plant with AI">
      <Button
        variant="primary"
        size="xl"
        aria-label="Identify plant with AI"
      >
        ✦ Identify
      </Button>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip content="Add to field journal — records location, date and your notes">
      <Button variant="ghost" size="lg">Add to journal</Button>
    </Tooltip>
  ),
}
