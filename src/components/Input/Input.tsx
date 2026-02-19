import React from 'react'
import { clsx } from 'clsx'

export type InputState = 'default' | 'focused' | 'filled' | 'error' | 'disabled'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?:       string
  hint?:        string
  error?:       string
  icon?:        React.ReactNode
  iconRight?:   React.ReactNode
  inputState?:  InputState
  pill?:        boolean
}

export function Input({
  label,
  hint,
  error,
  icon,
  iconRight,
  inputState = 'default',
  pill       = false,
  className,
  ...props
}: InputProps) {
  const hasError = !!error || inputState === 'error'

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {/* Label */}
      {label && (
        <label className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="relative flex items-center">
        {/* Left icon */}
        {icon && (
          <span className="absolute left-3.5 flex items-center text-text-ash pointer-events-none">
            {icon}
          </span>
        )}

        <input
          className={clsx(
            // Base
            'w-full h-12 font-body text-[13px] text-text-charcoal',
            'bg-bg-linen placeholder:text-text-ash',
            'border-[1.5px] transition-all duration-150 outline-none',
            pill ? 'rounded-full px-4' : 'rounded-md px-4',
            icon      && 'pl-10',
            iconRight && 'pr-10',
            // State borders
            hasError
              ? 'border-berry/80 bg-berry-pale/30 focus:border-berry focus:ring-1 focus:ring-berry/20'
              : 'border-bg-fog hover:border-bg-bark focus:border-green-moss focus:ring-1 focus:ring-green-moss/20',
            // Filled
            inputState === 'filled' && 'text-text-charcoal',
            // Disabled
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-bg-fog',
            className,
          )}
          {...props}
        />

        {/* Right icon */}
        {iconRight && (
          <span className="absolute right-3.5 flex items-center text-text-ash pointer-events-none">
            {iconRight}
          </span>
        )}
      </div>

      {/* Hint / Error */}
      {(hint || error) && (
        <p className={clsx(
          'font-mono text-[8px] tracking-[0.1em]',
          hasError ? 'text-berry' : 'text-text-ash',
        )}>
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

// ── TEXTAREA ─────────────────────────────────────────────────────
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?:     string
  hint?:      string
  error?:     string
  maxLength?: number
  showCount?: boolean
}

export function Textarea({
  label,
  hint,
  error,
  maxLength,
  showCount = false,
  className,
  value,
  ...props
}: TextareaProps) {
  const count = typeof value === 'string' ? value.length : 0
  const hasError = !!error

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <label className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
          {label}
        </label>
      )}

      <div className="relative">
        <textarea
          value={value}
          maxLength={maxLength}
          className={clsx(
            'w-full min-h-[88px] px-4 py-3',
            'font-body text-[13px] text-text-charcoal',
            'bg-bg-linen placeholder:text-text-ash',
            'border-[1.5px] rounded-md resize-none',
            'transition-all duration-150 outline-none',
            hasError
              ? 'border-berry/80 focus:border-berry focus:ring-1 focus:ring-berry/20'
              : 'border-bg-fog hover:border-bg-bark focus:border-green-moss focus:ring-1 focus:ring-green-moss/20',
            className,
          )}
          {...props}
        />
        {showCount && maxLength && (
          <span className="absolute bottom-2 right-3 font-mono text-[9px] text-text-ash">
            {count}/{maxLength}
          </span>
        )}
      </div>

      {(hint || error) && (
        <p className={clsx(
          'font-mono text-[8px] tracking-[0.1em]',
          hasError ? 'text-berry' : 'text-text-ash',
        )}>
          {error ?? hint}
        </p>
      )}
    </div>
  )
}
