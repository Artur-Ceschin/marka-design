import React from 'react'
import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'amber' | 'danger' | 'subtle'
export type ButtonSize    = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  loading?:  boolean
  icon?:     React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:   'bg-green-moss text-text-white shadow-green-glow hover:bg-[#3d5736] active:scale-[0.98]',
  secondary: 'bg-bg-birch text-text-charcoal border border-bg-bark hover:bg-bg-linen',
  ghost:     'bg-green-moss/8 text-green-moss border border-green-moss/25 hover:bg-green-mist',
  amber:     'bg-amber text-text-white shadow-amber-glow hover:bg-[#b36a2e] active:scale-[0.98]',
  danger:    'bg-bg-birch text-berry border border-berry/30 hover:bg-berry-pale',
  subtle:    'bg-bg-birch text-text-stone border border-bg-bark/60 hover:bg-bg-linen',
}

const sizeStyles: Record<ButtonSize, string> = {
  xl: 'h-[52px] px-6  text-[15px] font-semibold font-body',
  lg: 'h-[44px] px-5  text-[13px] font-medium  font-body',
  md: 'h-[36px] px-4  text-[12px] font-medium  font-body',
  sm: 'h-[28px] px-3  text-[11px] font-medium  font-body',
  xs: 'h-[24px] px-2  text-[10px] font-medium  font-body',
}

export function Button({
  variant   = 'primary',
  size      = 'lg',
  loading   = false,
  icon,
  iconRight,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        // Base
        'inline-flex items-center justify-center gap-2',
        'rounded-full transition-all duration-150 cursor-pointer',
        'select-none whitespace-nowrap',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        // Variant
        variantStyles[variant],
        // Size
        sizeStyles[size],
        // Full width
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}

      {children}

      {iconRight && !loading && (
        <span className="flex-shrink-0">{iconRight}</span>
      )}
    </button>
  )
}
