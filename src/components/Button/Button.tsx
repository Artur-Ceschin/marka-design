import React from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'amber' | 'danger' | 'subtle'
export type ButtonSize    = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant   // default: 'primary'
  size?:      ButtonSize      // default: 'lg'
  loading?:   boolean
  icon?:      React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
  asChild?:   boolean         // renders children as root element (e.g. <a>, next/link)
}

// ── Variant styles ────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-green-moss text-text-white shadow-green-glow ' +
    'hover:bg-[#3d5736] active:scale-[0.98]',
  secondary:
    'bg-bg-birch text-text-charcoal border-[1.5px] border-bg-bark ' +
    'hover:bg-bg-linen',
  ghost:
    'bg-green-moss/8 text-green-moss border-[1.5px] border-green-moss/25 ' +
    'hover:bg-green-mist',
  amber:
    'bg-amber text-text-white shadow-amber-glow ' +
    'hover:bg-[#b36a2e] active:scale-[0.98]',
  danger:
    'bg-bg-birch text-berry border-[1.5px] border-berry/30 ' +
    'hover:bg-berry-pale',
  subtle:
    'bg-bg-birch text-text-stone border-[1.5px] border-bg-bark/60 ' +
    'hover:bg-bg-linen',
}

// ── Size styles ────────────────────────────────────────────────────
// xl = SemiBold (600), all others = Medium (500)
const sizeStyles: Record<ButtonSize, string> = {
  xl: 'h-[52px] px-6      text-[15px] font-semibold',
  lg: 'h-[44px] px-5      text-[13px] font-medium',
  md: 'h-[36px] px-4      text-[12px] font-medium',
  sm: 'h-[28px] px-3      text-[11px] font-medium',
  xs: 'h-[24px] px-[10px] text-[10px] font-medium',
}

export function Button({
  variant   = 'primary',
  size      = 'lg',
  loading   = false,
  icon,
  iconRight,
  fullWidth = false,
  asChild   = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClassName = clsx(
    fullWidth ? 'flex' : 'inline-flex',
    'items-center justify-center',
    'relative',
    'rounded-full',
    'font-body',
    'select-none whitespace-nowrap',
    'transition-all duration-150',
    'cursor-pointer',
    'focus:outline-none',
    'focus-visible:ring-2 focus-visible:ring-green-moss focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  )

  // asChild: merge styles onto the child element (e.g. <a>, next/link)
  // Icon and spinner are omitted — child provides its own content
  if (asChild) {
    return (
      <Slot
        aria-busy={loading || undefined}
        className={baseClassName}
        {...props}
      >
        {children}
      </Slot>
    )
  }

  return (
    <button
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={baseClassName}
      {...props}
    >
      <span
        className={clsx(
          'inline-flex items-center gap-2',
          loading && 'opacity-0 pointer-events-none',
        )}
      >
        {icon && <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">{icon}</span>}
        {children}
        {iconRight && <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">{iconRight}</span>}
      </span>

      {/* Spinner — absolutely centered, only shown while loading */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}
    </button>
  )
}
