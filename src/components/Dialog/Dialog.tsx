import React from 'react'
import { clsx } from 'clsx'
import * as DialogPrimitive from '@radix-ui/react-dialog'

// ── Close icon ────────────────────────────────────────────────────

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
)

// ── Types ─────────────────────────────────────────────────────────

export interface MarkaDialogProps {
  /** Element that opens the dialog */
  trigger?:         React.ReactNode
  /** Dialog title — Playfair Display SemiBold 22px */
  title:            string
  /** Optional subtitle — DM Sans 13px text-stone */
  description?:     string
  /** Dialog body content */
  children?:        React.ReactNode
  /** Controlled open state */
  open?:            boolean
  /** Default open state (uncontrolled) */
  defaultOpen?:     boolean
  onOpenChange?:    (open: boolean) => void
  className?:       string
}

/**
 * MarkaDialog — Radix Dialog styled as a bottom sheet.
 *
 * Visual spec:
 *   Overlay:  dark-forest/60, backdrop-blur-sm, fade in/out
 *   Content:  bg-birch, border-top 3px green-moss, rounded-t-lg (24px top),
 *             shadow-lg, p-6, max-w-[480px], slide in from bottom
 *   Title:    Playfair Display SemiBold 22px text-charcoal
 *   Description: DM Sans 13px text-stone mt-2
 *   Close:    36×36 circle bg-linen, X icon text-ash, top-right
 */
export function MarkaDialog({
  trigger,
  title,
  description,
  children,
  open,
  defaultOpen,
  onOpenChange,
  className,
}: MarkaDialogProps) {
  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {trigger && (
        <DialogPrimitive.Trigger asChild>
          {trigger}
        </DialogPrimitive.Trigger>
      )}

      <DialogPrimitive.Portal>
        {/* ── Overlay ── */}
        <DialogPrimitive.Overlay
          className={clsx(
            'fixed inset-0 z-50',
            'bg-dark-forest/60 backdrop-blur-sm',
            'data-[state=open]:animate-fade-in',
            'data-[state=closed]:animate-fade-out',
          )}
        />

        {/* ── Content panel ── */}
        <DialogPrimitive.Content
          className={clsx(
            'fixed bottom-0 inset-x-0 z-50 mx-auto',
            'max-w-[480px] w-full',
            // Bottom sheet shape: 24px top radius, square bottom
            'rounded-t-lg',
            'bg-bg-birch',
            'border-t-[3px] border-t-green-moss',
            'shadow-lg',
            'p-6',
            'focus:outline-none',
            'data-[state=open]:animate-slide-in-from-bottom',
            'data-[state=closed]:animate-slide-out-to-bottom',
            className,
          )}
        >
          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <DialogPrimitive.Title className="font-display text-[22px] font-semibold leading-tight text-text-charcoal">
                {title}
              </DialogPrimitive.Title>
              {description && (
                <DialogPrimitive.Description className="font-body text-[13px] text-text-stone mt-2">
                  {description}
                </DialogPrimitive.Description>
              )}
            </div>

            {/* Close button */}
            <DialogPrimitive.Close
              aria-label="Close dialog"
              className={clsx(
                'flex-shrink-0 w-9 h-9 flex items-center justify-center',
                'rounded-full bg-bg-linen text-text-ash',
                'transition-colors duration-150 hover:bg-bg-fog',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-green-moss focus-visible:ring-offset-2',
              )}
            >
              <XIcon />
            </DialogPrimitive.Close>
          </div>

          {/* ── Body ── */}
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
