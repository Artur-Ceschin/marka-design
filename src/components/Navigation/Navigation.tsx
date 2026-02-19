import React from 'react'
import { clsx } from 'clsx'

export interface NavItem {
  id:    string
  label: string
  icon:  React.ReactNode
}

export interface BottomNavProps {
  items:      NavItem[]
  activeId:   string
  onSelect:   (id: string) => void
  onCamera?:  () => void
  theme?:     'light' | 'dark'
  className?: string
}

export function BottomNav({
  items,
  activeId,
  onSelect,
  onCamera,
  theme    = 'light',
  className,
}: BottomNavProps) {
  const isDark = theme === 'dark'
  const midIdx = Math.floor(items.length / 2)
  const left   = items.slice(0, midIdx)
  const right  = items.slice(midIdx)

  const renderItem = (item: NavItem) => {
    const isActive = item.id === activeId
    return (
      <button
        key={item.id}
        onClick={() => onSelect(item.id)}
        className="flex-1 flex flex-col items-center justify-center gap-[5px] h-full transition-all duration-150"
      >
        <span
          className={clsx(
            'transition-colors duration-150',
            isActive
              ? isDark ? 'text-green-sage' : 'text-green-moss'
              : isDark ? 'text-white/35'   : 'text-text-ash',
          )}
        >
          {item.icon}
        </span>
        <span
          className={clsx(
            'font-mono text-[8px] tracking-[0.08em] uppercase',
            isActive
              ? isDark ? 'text-green-sage' : 'text-green-moss'
              : isDark ? 'text-white/35'   : 'text-text-ash',
          )}
        >
          {item.label}
        </span>
      </button>
    )
  }

  return (
    <nav
      className={clsx(
        'relative flex items-center h-[82px] overflow-visible',
        'border-t',
        isDark
          ? 'bg-dark-forest border-white/8'
          : 'bg-bg-birch border-bg-fog',
        className,
      )}
    >
      {/* Left nav items */}
      {left.map(renderItem)}

      {/* Flex-1 placeholder — holds horizontal space for the camera slot */}
      {onCamera && <div className="flex-1 shrink-0" />}

      {/* Right nav items */}
      {right.map(renderItem)}

      {/* Camera button — absolutely centered, lifts 14px above bar */}
      {onCamera && (
        <button
          onClick={onCamera}
          className={clsx(
            'absolute left-1/2 -translate-x-1/2 -top-[14px]',
            'w-[58px] h-[58px] rounded-full bg-green-moss shadow-green-glow',
            'flex items-center justify-center',
            'transition-all duration-150 hover:scale-105 active:scale-95',
          )}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="6" width="18" height="13" rx="2.5" stroke="#FAF8F4" strokeWidth="1.5" />
            <path d="M7 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" stroke="#FAF8F4" strokeWidth="1.5" />
            <circle cx="11" cy="12.5" r="2.5" stroke="#FAF8F4" strokeWidth="1.5" />
          </svg>
        </button>
      )}
    </nav>
  )
}

// ── SCREEN HEADER ──────────────────────────────────────────────────

export interface ScreenHeaderProps {
  title:        string
  onBack?:      () => void
  onShare?:     () => void
  rightAction?: React.ReactNode
  theme?:       'light' | 'dark'
  className?:   string
}

export function ScreenHeader({
  title,
  onBack,
  onShare,
  rightAction,
  theme    = 'light',
  className,
}: ScreenHeaderProps) {
  const isDark = theme === 'dark'

  const circleBtn = isDark
    ? 'bg-white/10 hover:bg-white/15 text-text-white'
    : 'bg-bg-linen hover:bg-bg-fog text-text-charcoal'

  return (
    <header
      className={clsx(
        'flex items-center justify-between h-[60px] px-4',
        'border-b',
        isDark
          ? 'bg-dark-forest border-white/8'
          : 'bg-bg-birch border-bg-fog/50',
        className,
      )}
    >
      {/* Back */}
      {onBack ? (
        <button
          onClick={onBack}
          className={clsx(
            'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
            'transition-colors duration-150',
            circleBtn,
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <div className="w-9 shrink-0" />
      )}

      {/* Title */}
      <h1
        className={clsx(
          'flex-1 font-display font-semibold text-[18px] leading-tight text-center truncate mx-3',
          isDark ? 'text-text-white' : 'text-text-charcoal',
        )}
      >
        {title}
      </h1>

      {/* Right action */}
      {rightAction ? (
        <div className="w-9 shrink-0">{rightAction}</div>
      ) : onShare ? (
        <button
          onClick={onShare}
          className={clsx(
            'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
            'transition-colors duration-150',
            circleBtn,
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="4"  cy="8"  r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="3"  r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M5.5 7.1l5-3.2M5.5 8.9l5 3.2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      ) : (
        <div className="w-9 shrink-0" />
      )}
    </header>
  )
}
