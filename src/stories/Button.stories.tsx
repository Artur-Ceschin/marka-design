import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const LeafIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 3s-3 0-6 3-4 7-4 7 4-1 7-4 3-6 3-6Z" />
    <path d="M3 13l3-3" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

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
      options: ['primary', 'secondary', 'ghost', 'amber', 'danger', 'subtle'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Button height and font size',
    },
    loading:   { control: 'boolean', description: 'Show loading spinner, hide text' },
    fullWidth: { control: 'boolean', description: 'Stretch to container width' },
    disabled:  { control: 'boolean' },
    children:  { control: 'text' },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Save plant' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'lg', children: 'View details' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'lg', children: 'View all' },
}

export const Amber: Story = {
  args: { variant: 'amber', size: 'lg', children: 'Add note' },
}

export const Danger: Story = {
  args: { variant: 'danger', size: 'lg', children: 'Remove' },
}

export const Subtle: Story = {
  args: { variant: 'subtle', size: 'lg', children: 'Skip' },
}

export const Loading: Story = {
  args: { variant: 'primary', size: 'lg', loading: true, children: 'Identifying…' },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'lg', disabled: true, children: 'Save plant' },
}


export const FullWidth: Story = {
  args: { variant: 'primary', size: 'xl', fullWidth: true, children: 'Identify plant' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
}

// ── 10: Icon left ─────────────────────────────────────────────────

export const WithIconLeft: Story = {
  args: {
    variant:  'primary',
    size:     'lg',
    children: 'Save to notebook',
    icon:     <LeafIcon />,
  },
}

// ── 11: Icon right ────────────────────────────────────────────────

export const WithIconRight: Story = {
  args: {
    variant:   'secondary',
    size:      'lg',
    children:  'View all finds',
    iconRight: <ArrowRightIcon />,
  },
}

const VARIANTS = [
  { variant: 'primary',   label: 'Save plant',   name: 'primary'   },
  { variant: 'secondary', label: 'View details',  name: 'secondary' },
  { variant: 'ghost',     label: 'View all',      name: 'ghost'     },
  { variant: 'amber',     label: 'Add note',      name: 'amber'     },
  { variant: 'danger',    label: 'Remove',        name: 'danger'    },
  { variant: 'subtle',    label: 'Skip',          name: 'subtle'    },
] as const

export const AllVariants: Story = {
  render: () => (
    <div
      style={{ backgroundColor: '#F5F0E8', minWidth: 360, padding: 24, borderRadius: 16 }}
    >
      {/* Header */}
      <p
        style={{
          fontFamily: "'Courier Prime', monospace",
          fontSize: 8,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#9E9992',
          marginBottom: 16,
        }}
      >
        Primary Variants
      </p>

      {/* Button rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {VARIANTS.map(({ variant, label, name }) => (
          <div
            key={variant}
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <Button variant={variant}>{label}</Button>
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 8,
                letterSpacing: '0.1em',
                color: '#9E9992',
              }}
            >
              ← {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}
export const AsChild: Story = {
  name: 'AsChild (renders as <a>)',
  render: () => (
    <div className="flex flex-col gap-3 items-start p-6 bg-bg-birch rounded-lg">
      <p
        style={{
          fontFamily: "'Courier Prime', monospace",
          fontSize: 8,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#9E9992',
          marginBottom: 8,
        }}
      >
        asChild — merges styles onto child element
      </p>

      <Button asChild variant="primary" size="lg">
        <a href="#explore">Explore plants</a>
      </Button>

      <Button asChild variant="secondary" size="md">
        <a href="#journal">Open journal</a>
      </Button>

      <Button asChild variant="ghost" size="sm">
        <a href="#back">← Go back</a>
      </Button>
    </div>
  ),
}


const SIZES = [
  { size: 'xl', label: 'Extra Large', hint: 'h-52px · semibold 15px'         },
  { size: 'lg', label: 'Large',       hint: 'h-44px · medium 13px (default)' },
  { size: 'md', label: 'Medium',      hint: 'h-36px · medium 12px'           },
  { size: 'sm', label: 'Small',       hint: 'h-28px · medium 11px'           },
  { size: 'xs', label: 'Extra Small', hint: 'h-24px · medium 10px'           },
] as const

export const AllSizes: Story = {
  render: () => (
    <div
      style={{ backgroundColor: '#F5F0E8', padding: 24, borderRadius: 16, minWidth: 360 }}
    >
      <p
        style={{
          fontFamily: "'Courier Prime', monospace",
          fontSize: 8,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#9E9992',
          marginBottom: 16,
        }}
      >
        All Sizes
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
        {SIZES.map(({ size, label, hint }) => (
          <div
            key={size}
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <Button variant="primary" size={size}>{label}</Button>
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 8,
                letterSpacing: '0.1em',
                color: '#9E9992',
                whiteSpace: 'nowrap',
              }}
            >
              {hint}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}
