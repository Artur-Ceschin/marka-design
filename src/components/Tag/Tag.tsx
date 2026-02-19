import React from 'react'
import { clsx } from 'clsx'

export type TagVariant = 'green' | 'amber' | 'berry' | 'dark' | 'neutral'
export type TagSize    = 'md' | 'sm'

export interface TagProps {
  variant?:  TagVariant
  size?:     TagSize
  dot?:      boolean
  children:  React.ReactNode
  className?: string
  onClick?:  () => void
}

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
}: TagProps) {
  return (
    <span
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full font-mono uppercase',
        'transition-all duration-150',
        onClick && 'cursor-pointer hover:opacity-80',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {dot && (
        <span className={clsx('inline-block w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[variant])} />
      )}
      {children}
    </span>
  )
}
