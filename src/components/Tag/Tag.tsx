import React from 'react'
import { clsx } from 'clsx'
import * as Toggle from '@radix-ui/react-toggle'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export type TagVariant = 'green' | 'amber' | 'berry' | 'dark' | 'neutral'
export type TagSize    = 'md' | 'sm'

export interface TagProps {
  variant?:          TagVariant
  size?:             TagSize
  dot?:              boolean
  children:          React.ReactNode
  className?:        string
  onClick?:          () => void
  // Toggle mode — renders as Radix Toggle.Root (aria-pressed, keyboard activation)
  asToggle?:         boolean
  pressed?:          boolean
  onPressedChange?:  (pressed: boolean) => void
  // Value for TagGroup — when inside <TagGroup>, renders as ToggleGroup.Item
  value?:            string
}

// Context set by TagGroup so Tag knows to render as ToggleGroup.Item
export const TagGroupContext = React.createContext(false)

const variantStyles: Record<TagVariant, string> = {
  green:   'bg-green-mist text-green-moss border border-green-moss/20',
  amber:   'bg-amber-pale text-amber border border-amber/20',
  berry:   'bg-berry-pale text-berry border border-berry/20',
  dark:    'bg-dark-forest text-text-white border border-white/10',
  neutral: 'bg-bg-linen text-text-stone border border-bg-fog',
}

const sizeStyles: Record<TagSize, string> = {
  md: 'px-[10px] py-[4px] text-[10px] tracking-[0.15em]',
  sm: 'px-[8px]  py-[3px] text-[9px]  tracking-[0.15em]',
}

const dotColors: Record<TagVariant, string> = {
  green:   'bg-green-moss',
  amber:   'bg-amber',
  berry:   'bg-berry',
  dark:    'bg-green-sage',
  neutral: 'bg-text-ash',
}

export function Tag({
  variant  = 'green',
  size     = 'md',
  dot      = false,
  children,
  className,
  onClick,
  asToggle,
  pressed,
  onPressedChange,
  value,
}: TagProps) {
  const isInGroup = React.useContext(TagGroupContext)

  const dotEl = dot && (
    <span className={clsx('block w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[variant])} />
  )

  const interactiveClass = clsx(
    'inline-flex items-center gap-1.5 rounded-full font-mono uppercase leading-none whitespace-nowrap',
    'transition-all duration-150',
    'cursor-pointer hover:opacity-80',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  // Inside TagGroup: render as Radix ToggleGroup.Item (roving tabindex, arrow nav)
  if (isInGroup && value !== undefined) {
    return (
      <ToggleGroup.Item value={value} className={interactiveClass}>
        {dotEl}
        {children}
      </ToggleGroup.Item>
    )
  }

  // Standalone toggle: render as Radix Toggle.Root (aria-pressed, keyboard activation)
  if (asToggle) {
    return (
      <Toggle.Root
        pressed={pressed}
        onPressedChange={onPressedChange}
        className={interactiveClass}
      >
        {dotEl}
        {children}
      </Toggle.Root>
    )
  }

  // Default: plain span (or button-role span when onClick provided)
  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full font-mono uppercase leading-none whitespace-nowrap',
        'transition-all duration-150',
        onClick && 'cursor-pointer hover:opacity-80',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {dotEl}
      {children}
    </span>
  )
}
