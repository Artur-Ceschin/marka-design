import React from 'react'
import { clsx } from 'clsx'
import { Tag } from '../Tag'

// ── FIND CARD ──────────────────────────────────────────────────────
export interface FindCardProps {
  name:       string
  latin:      string
  date:       string
  imageBg?:   string
  imageUrl?:  string
  onClick?:   () => void
  className?: string
}

export function FindCard({
  name,
  latin,
  date,
  imageBg  = 'bg-green-pale',
  imageUrl,
  onClick,
  className,
}: FindCardProps) {
  return (
    <article
      onClick={onClick}
      className={clsx(
        'w-[130px] flex-shrink-0 rounded-md overflow-hidden',
        'bg-bg-linen border border-bg-fog shadow-sm',
        'transition-all duration-200',
        onClick && 'cursor-pointer hover:shadow-md hover:-translate-y-0.5',
        className,
      )}
    >
      {/* Image area */}
      <div className={clsx('h-[88px] relative overflow-hidden', !imageUrl && imageBg)}>
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/25" />
          </div>
        )}
        {/* Gradient fade into card body */}
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-bg-linen to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="px-[10px] pb-[10px] pt-1">
        <p className="font-display font-semibold text-[12px] text-text-charcoal leading-tight line-clamp-2">
          {name}
        </p>
        <p className="font-display italic text-[9px] text-text-ash mt-[2px]">
          {latin}
        </p>
        <p className="font-mono text-[8px] text-text-ash mt-3 tracking-wide">
          {date}
        </p>
      </div>
    </article>
  )
}

// ── FEATURED CARD ─────────────────────────────────────────────────
export interface FeaturedCardProps {
  name:       string
  latin:      string
  tags:       string[]
  imageUrl?:  string
  bgColor?:   string
  onClick?:   () => void
  className?: string
}

export function FeaturedCard({
  name,
  latin,
  tags,
  imageUrl,
  bgColor  = '#4A6741',
  onClick,
  className,
}: FeaturedCardProps) {
  return (
    <article
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className={clsx(
        'relative w-full h-[200px] rounded-lg overflow-hidden shadow-md',
        'transition-all duration-200',
        onClick && 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5',
        className,
      )}
    >
      {/* Background image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
      )}

      {/* Decorative circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] aspect-square rounded-full bg-white/[0.07] pointer-events-none" />
      <div className="absolute top-[15%] right-[10%] w-[35%] aspect-square rounded-full bg-white/[0.05] pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Content — pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-[3px] rounded-full font-mono text-[8px] tracking-[0.15em] uppercase text-white/90 bg-white/15 border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-semibold text-[20px] text-text-white leading-tight">
          {name}
        </h3>
        <p className="font-display italic text-[11px] text-white/55 mt-1">
          {latin}
        </p>
      </div>
    </article>
  )
}

// ── PLANT RESULT CARD ─────────────────────────────────────────────
export type ConfidenceLevel = 'high' | 'medium' | 'low'

export interface PlantResultCardProps {
  name:        string
  latin:       string
  confidence:  number
  tags:        Array<{ label: string; variant?: 'green' | 'amber' | 'berry' }>
  description: string
  imageUrl?:   string
  imageBg?:    string
  onSave?:     () => void
  onLearnMore?: () => void
  className?:  string
}

function getConfidenceVariant(confidence: number): 'green' | 'amber' | 'berry' {
  if (confidence >= 80) return 'green'
  if (confidence >= 50) return 'amber'
  return 'berry'
}

export function PlantResultCard({
  name,
  latin,
  confidence,
  tags,
  description,
  imageUrl,
  imageBg  = '#4A6741',
  onSave,
  onLearnMore,
  className,
}: PlantResultCardProps) {
  const confVariant = getConfidenceVariant(confidence)

  return (
    <article className={clsx('rounded-lg overflow-hidden bg-bg-birch shadow-md', className)}>
      {/* Image */}
      <div
        className="h-[180px] relative overflow-hidden"
        style={{ backgroundColor: imageBg }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          /* Decorative circle — top-right */
          <div className="absolute top-4 right-4 w-[45%] aspect-square rounded-full bg-white/10" />
        )}
        {/* Gradient fade into card bg */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-bg-birch to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Confidence badge */}
        <div className="mt-3 mb-2">
          <Tag variant={confVariant} dot>
            {confidence}% match
          </Tag>
        </div>

        {/* Name */}
        <h2 className="font-display font-semibold text-[22px] text-text-charcoal leading-tight">
          {name}
        </h2>
        <p className="font-display italic text-[12px] text-text-ash mt-1">
          {latin}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <Tag key={tag.label} variant={tag.variant ?? 'green'} size="sm">
              {tag.label}
            </Tag>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-bg-fog my-3" />

        {/* Description */}
        <p className="font-body text-[12px] text-text-stone leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="flex gap-2.5 mt-4">
          {onSave && (
            <button
              onClick={onSave}
              className="flex-1 h-11 rounded-full bg-green-moss text-text-white font-body font-semibold text-[13px] shadow-green-glow hover:bg-[#3d5736] transition-all duration-150"
            >
              Save to notebook
            </button>
          )}
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="px-5 h-11 rounded-full bg-bg-birch border border-bg-bark text-text-charcoal font-body font-medium text-[13px] hover:bg-bg-linen transition-all duration-150"
            >
              Learn more
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

// ── NOTEBOOK STRIP ────────────────────────────────────────────────
export interface NotebookStripProps {
  count:      number
  weekCount?: number
  onClick?:   () => void
  className?: string
}

export function NotebookStrip({
  count,
  weekCount,
  onClick,
  className,
}: NotebookStripProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex items-center gap-3 px-3 py-3 rounded-md',
        'bg-amber-pale border-[1.5px] border-amber/20',
        onClick && 'cursor-pointer hover:shadow-sm transition-all duration-150',
        className,
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-[10px] bg-amber flex items-center justify-center flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="2" width="14" height="16" rx="2" stroke="#FAF8F4" strokeWidth="1.5" />
          <path d="M7 7h6M7 10h6M7 13h4" stroke="#FAF8F4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-[15px] text-text-charcoal">
          Field Journal
        </p>
        <p className="font-body text-[11px] text-text-stone mt-0.5">
          {count} plants catalogued{weekCount ? ` · ${weekCount} this week` : ''}
        </p>
      </div>

      {/* Arrow */}
      <div className="w-7 h-7 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2.5 5h5M5.5 2.5L8 5l-2.5 2.5" stroke="#FAF8F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
