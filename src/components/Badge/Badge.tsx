import React from 'react'
import { clsx } from 'clsx'

export type BadgeVariant = 'green' | 'amber' | 'berry' | 'dark' | 'neutral'

export interface BadgeProps {
  variant?:   BadgeVariant
  dot?:       boolean
  pulse?:     boolean
  children:   React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  green:   'bg-green-mist  text-green-moss  border-green-moss/20',
  amber:   'bg-amber-pale  text-amber       border-amber/20',
  berry:   'bg-berry-pale  text-berry       border-berry/20',
  dark:    'bg-dark-forest text-text-white  border-white/10',
  neutral: 'bg-bg-linen    text-text-stone  border-bg-fog',
}

const dotColors: Record<BadgeVariant, string> = {
  green:   'bg-green-moss',
  amber:   'bg-amber',
  berry:   'bg-berry',
  dark:    'bg-green-sage',
  neutral: 'bg-text-ash',
}

export function Badge({
  variant  = 'green',
  dot      = false,
  pulse    = false,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-[5px]',
        'rounded-full border font-mono text-[9px] tracking-widest uppercase',
        variantStyles[variant],
        className,
      )}
    >
      {dot && (
        <span className="relative flex-shrink-0 w-[6px] h-[6px]">
          {pulse && (
            <span className={clsx('absolute inset-0 rounded-full opacity-75 animate-ping', dotColors[variant])} />
          )}
          <span className={clsx('relative inline-flex w-[6px] h-[6px] rounded-full', dotColors[variant])} />
        </span>
      )}
      {children}
    </span>
  )
}
