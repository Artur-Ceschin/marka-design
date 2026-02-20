import React from 'react'
import { clsx } from 'clsx'
import * as SelectPrimitive from '@radix-ui/react-select'

// ── Icons ─────────────────────────────────────────────────────────

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 8l4 4 6-7" />
  </svg>
)

// ── Types ─────────────────────────────────────────────────────────

export interface SelectOption {
  value:    string
  label:    React.ReactNode
  disabled?: boolean
}

export interface SelectGroup {
  label:   string
  options: SelectOption[]
}

export interface MarkaSelectProps {
  label?:          string
  placeholder?:    string
  options?:        SelectOption[]
  groups?:         SelectGroup[]
  value?:          string
  defaultValue?:   string
  onValueChange?:  (value: string) => void
  disabled?:       boolean
  className?:      string
}

/**
 * MarkaSelect — fully styled Radix Select.
 *
 * Visual spec:
 *   Trigger: h-12, bg-linen, border-[1.5px] border-fog, rounded-md (16px),
 *            DM Sans 13px text-charcoal, chevron rotates 180° when open
 *   Content: bg-birch, border-[1.5px] border-fog, rounded-md, shadow-md, max-h-[240px]
 *   Item:    h-[44px] px-4, hover bg-linen, selected: text-green-moss + checkmark
 *   Separator: 1px border-fog
 */
export function MarkaSelect({
  label,
  placeholder = 'Select…',
  options,
  groups,
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
}: MarkaSelectProps) {
  return (
    <div className={clsx('flex flex-col gap-[6px] w-full', className)}>
      {label && (
        <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
          {label}
        </span>
      )}

      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        {/* ── Trigger ── */}
        <SelectPrimitive.Trigger
          className={clsx(
            'group flex h-12 w-full items-center justify-between',
            'bg-bg-linen',
            'border-[1.5px] border-bg-fog rounded-md',
            'px-4',
            'font-body text-[13px] text-text-charcoal',
            'transition-all duration-150',
            'hover:border-bg-bark',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-green-moss focus-visible:ring-offset-2',
            'data-[state=open]:border-green-moss',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          <SelectPrimitive.Value placeholder={
            <span className="text-text-ash">{placeholder}</span>
          } />
          <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="text-text-ash transition-transform duration-150 group-data-[state=open]:rotate-180" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        {/* ── Dropdown panel ── */}
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={6}
            className={clsx(
              'z-50 w-[var(--radix-select-trigger-width)]',
              'bg-bg-birch',
              'border-[1.5px] border-bg-fog rounded-md',
              'shadow-md',
              'overflow-hidden',
              'data-[state=open]:animate-fade-in',
            )}
          >
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-6 text-text-ash cursor-default">
              <ChevronDownIcon className="rotate-180" />
            </SelectPrimitive.ScrollUpButton>

            <SelectPrimitive.Viewport className="max-h-[240px] overflow-y-auto p-1">
              {/* Flat options */}
              {options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </SelectItem>
              ))}

              {/* Grouped options */}
              {groups?.map((group) => (
                <SelectPrimitive.Group key={group.label}>
                  <SelectPrimitive.Label className="px-4 py-2 font-mono text-[8px] tracking-[0.15em] uppercase text-text-ash">
                    {group.label}
                  </SelectPrimitive.Label>
                  {group.options.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectPrimitive.Group>
              ))}
            </SelectPrimitive.Viewport>

            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-6 text-text-ash cursor-default">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  )
}

// ── SelectItem ────────────────────────────────────────────────────

function SelectItem({
  value,
  children,
  disabled,
}: {
  value:     string
  children:  React.ReactNode
  disabled?: boolean
}) {
  return (
    <SelectPrimitive.Item
      value={value}
      disabled={disabled}
      className={clsx(
        'relative flex h-[44px] w-full items-center',
        'px-4 pr-10',
        'font-body text-[13px] text-text-charcoal',
        'rounded-sm',
        'select-none outline-none cursor-pointer',
        'transition-colors duration-100',
        'hover:bg-bg-linen',
        'data-[state=checked]:text-green-moss',
        'data-[highlighted]:bg-bg-linen',
        'data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed',
      )}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-4 flex items-center">
        <CheckIcon className="text-green-moss" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

// ── SelectSeparator ───────────────────────────────────────────────

export function SelectSeparator({ className }: { className?: string }) {
  return (
    <SelectPrimitive.Separator
      className={clsx('my-1 h-px bg-bg-fog', className)}
    />
  )
}
