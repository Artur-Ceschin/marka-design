import React from 'react'
import { clsx } from 'clsx'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export interface TooltipProps {
  /** Tooltip text or content */
  content:     React.ReactNode
  /** The element that triggers the tooltip */
  children:    React.ReactElement
  /** Which side of the trigger to render on */
  side?:       'top' | 'right' | 'bottom' | 'left'
  /** Pixels between trigger and tooltip */
  sideOffset?: number
}

/**
 * Tooltip — wraps any element and shows a floating label on hover/focus.
 *
 * Visual spec:
 *   bg: dark-forest (#1A1F16)
 *   text: text-white, DM Sans 12px
 *   padding: 6px 12px, radius: 8px
 *   arrow: dark-forest fill
 *   delay: 300ms open, 0ms close
 *   animation: fade-in + slide up 4px
 */
export function Tooltip({
  content,
  children,
  side       = 'top',
  sideOffset = 8,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={sideOffset}
            className={clsx(
              'z-50 font-body text-[12px] text-text-white',
              'bg-dark-forest',
              'px-3 py-1.5 rounded-sm',
              'shadow-md',
              'select-none',
              // Open animation: fade + slide up 4px (uses existing fade-in keyframe)
              'data-[state=delayed-open]:animate-fade-in',
              // Close: instant (0ms per spec)
              'data-[state=closed]:opacity-0',
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-dark-forest" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
