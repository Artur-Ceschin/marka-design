import React, { useId } from 'react'
import { clsx } from 'clsx'
import * as Label from '@radix-ui/react-label'

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
  id: idProp,
  ...props
}: InputProps) {
  const generatedId  = useId()
  const inputId      = idProp ?? generatedId
  const messageId    = `${inputId}-desc`
  const hasError     = !!error || inputState === 'error'
  const hasMessage   = !!(hint || error)

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {/* Label — properly associated via Radix Label */}
      {label && (
        <Label.Root
          htmlFor={inputId}
          className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash"
        >
          {label}
        </Label.Root>
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
          id={inputId}
          aria-invalid={hasError || undefined}
          aria-describedby={hasMessage ? messageId : undefined}
          className={clsx(
            'w-full h-12 font-body text-[13px] text-text-charcoal',
            'bg-bg-linen placeholder:text-text-ash',
            'border-[1.5px] transition-all duration-150 outline-none',
            pill ? 'rounded-full px-4' : 'rounded-md px-4',
            icon      && 'pl-10',
            iconRight && 'pr-10',
            hasError
              ? 'border-berry/80 bg-berry-pale/30 focus:border-berry focus:ring-1 focus:ring-berry/20'
              : 'border-bg-fog hover:border-bg-bark focus:border-green-moss focus:ring-1 focus:ring-green-moss/20',
            inputState === 'filled' && 'text-text-charcoal',
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

      {/* Hint / Error — role="alert" on errors so screen readers announce them */}
      {hasMessage && (
        <p
          id={messageId}
          role={hasError ? 'alert' : undefined}
          className={clsx(
            'font-mono text-[8px] tracking-[0.1em]',
            hasError ? 'text-berry' : 'text-text-ash',
          )}
        >
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
  id: idProp,
  value,
  ...props
}: TextareaProps) {
  const generatedId = useId()
  const inputId     = idProp ?? generatedId
  const messageId   = `${inputId}-desc`
  const count       = typeof value === 'string' ? value.length : 0
  const hasError    = !!error
  const hasMessage  = !!(hint || error)

  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <Label.Root
          htmlFor={inputId}
          className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash"
        >
          {label}
        </Label.Root>
      )}

      <div className="relative">
        <textarea
          id={inputId}
          value={value}
          maxLength={maxLength}
          aria-invalid={hasError || undefined}
          aria-describedby={hasMessage ? messageId : undefined}
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

      {hasMessage && (
        <p
          id={messageId}
          role={hasError ? 'alert' : undefined}
          className={clsx(
            'font-mono text-[8px] tracking-[0.1em]',
            hasError ? 'text-berry' : 'text-text-ash',
          )}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}
