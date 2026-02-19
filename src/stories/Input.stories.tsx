import type { Meta, StoryObj } from '@storybook/react'
import { Input, Textarea } from '../components/Input'

const meta: Meta<typeof Input> = {
  title:     'Marka/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'birch', values: [{ name: 'birch', value: '#F5F0E8' }] },
  },
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    hint:        { control: 'text' },
    error:       { control: 'text' },
    pill:        { control: 'boolean' },
    disabled:    { control: 'boolean' },
    inputState: {
      control: 'select',
      options: ['default','focused','filled','error','disabled'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    inputState: 'error',
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const Pill: Story = {
  args: {
    placeholder: 'Search plants, fungi, mosses…',
    pill: true,
    icon: <span className="text-text-ash">🔍</span>,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-6 bg-bg-birch rounded-lg w-80">
      <Input label="Default"   placeholder="Enter plant name…" />
      <Input label="With hint" placeholder="Enter plant name…" hint="Common or scientific name" />
      <Input label="Error"     placeholder="Enter email…" error="Invalid email address" inputState="error" />
      <Input label="Disabled"  placeholder="Not available" disabled />
      <Input label="Password"  placeholder="••••••••" type="password" />
      <Input label="Search (pill)" placeholder="Search plants…" pill />
    </div>
  ),
}

export const TextareaStory: StoryObj<typeof Textarea> = {
  render: () => (
    <div className="p-6 bg-bg-birch rounded-lg w-80">
      <Textarea
        label="Field notes"
        placeholder="Add a note about this plant…"
        showCount
        maxLength={300}
      />
    </div>
  ),
}
TextareaStory.storyName = 'Textarea'
