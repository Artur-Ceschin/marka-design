import React from 'react'
import { clsx } from 'clsx'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { TagGroupContext } from './Tag'

export type TagGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroup.Root> & {
  className?: string
}

/**
 * TagGroup wraps a row of <Tag value="..."> chips in a Radix ToggleGroup.
 * Provides: arrow-key navigation, roving tabindex, aria-pressed, single/multi select.
 *
 * Usage:
 *   <TagGroup type="single" value={season} onValueChange={setSeason}>
 *     <Tag value="winter">✦ Winter</Tag>
 *     <Tag value="spring">✦ Spring</Tag>
 *   </TagGroup>
 */
export function TagGroup({ children, className, ...props }: TagGroupProps) {
  return (
    <TagGroupContext.Provider value={true}>
      <ToggleGroup.Root
        className={clsx('flex flex-wrap gap-2', className)}
        {...props}
      >
        {children}
      </ToggleGroup.Root>
    </TagGroupContext.Provider>
  )
}
