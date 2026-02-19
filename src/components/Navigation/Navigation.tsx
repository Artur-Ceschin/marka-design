import React from 'react'
import { clsx } from 'clsx'

export interface NavItem {
  id:      string
  label:   string
  icon:    React.ReactNode
}

export interface BottomNavProps {
  items:       NavItem[]
  activeId:    string
  onSelect:    (id: string) => void
  onCamera?:   () => void
  theme?:      'light' | 'dark'
  className?:  string
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

  return (
    <nav
      className={clsx(
        'relative flex items-center h-[82px] px-1',
        'border-t',
        isDark
          ? 'bg-dark-forest border-white/8'
          : 'bg-bg-birch border-bg-fog',
        className,
      )}
    >
      {items.map((item, i) => {
        const isActive = item.id === activeId
        // Insert camera button in the middle
        const midIndex = Math.floor(items.length / 2)

        return (
          <React.Fragment key={item.id}>
            {i === midIndex && onCamera && (
              <div className="flex-1 flex justify-center">
                {/* Camera button lifts above nav */}
                <button
                  onClick={onCamera}
                  className="relative -top-[14px] w-[58px] h-[58px] rounded-full bg-green-moss shadow-green-glow flex items-center justify-center transition-all duration-150 hover:scale-105 active:scale-95"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="3" stroke="#FAF8F4" strokeWidth="1.5" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#FAF8F4" strokeWidth="1.5" />
                    <circle cx="12" cy="14" r="3" stroke="#FAF8F4" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            )}

            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={clsx(
                'flex-1 flex flex-col items-center gap-[6px] pt-2',
                'transition-all duration-150',
              )}
            >
              <span className={clsx(
                'transition-colors duration-150',
                isActive
                  ? isDark ? 'text-green-sage' : 'text-green-moss'
                  : isDark ? 'text-white/35' : 'text-text-ash',
              )}>
                {item.icon}
              </span>
              <span className={clsx(
                'font-mono text-[8px] tracking-[0.08em] uppercase',
                isActive
                  ? isDark ? 'text-green-sage' : 'text-green-moss'
                  : isDark ? 'text-white/35' : 'text-text-ash',
              )}>
                {item.label}
              </span>
            </button>
          </React.Fragment>
        )
      })}
    </nav>
  )
}

// ── SCREEN HEADER ─────────────────────────────────────────────────
export interface ScreenHeaderProps {
  title:       string
  onBack?:     () => void
  onShare?:    () => void
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

  return (
    <header
      className={clsx(
        'flex items-center justify-between h-[60px] px-4',
        'border-b',
        isDark
          ? 'bg-dark-forest border-white/8 text-text-white'
          : 'bg-bg-birch border-bg-fog/50 text-text-charcoal',
        className,
      )}
    >
      {/* Back */}
      {onBack ? (
        <button
          onClick={onBack}
          className={clsx(
            'w-9 h-9 rounded-full flex items-center justify-center',
            isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-bg-linen hover:bg-bg-fog',
            'transition-colors duration-150',
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : <div className="w-9" />}

      {/* Title */}
      <h1 className="font-display font-semibold text-[18px] leading-tight text-center truncate mx-2">
        {title}
      </h1>

      {/* Right action */}
      {rightAction ? (
        <div className="w-9">{rightAction}</div>
      ) : onShare ? (
        <button
          onClick={onShare}
          className={clsx(
            'w-9 h-9 rounded-full flex items-center justify-center',
            isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-bg-linen hover:bg-bg-fog',
            'transition-colors duration-150',
          )}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="4" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="3" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 7l4-3M6 9l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      ) : <div className="w-9" />}
    </header>
  )
}
