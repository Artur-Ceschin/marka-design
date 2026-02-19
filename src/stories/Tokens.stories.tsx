import type { Meta, StoryObj } from '@storybook/react'
import { tokens } from '../tokens'

const meta: Meta = {
  title: 'Marka/Foundation/Tokens',
  parameters: { layout: 'padded' },
}
export default meta

// ── COLOR SWATCHES ──
export const Colors: StoryObj = {
  render: () => (
    <div className="p-6 bg-bg-birch min-h-screen font-body">
      <h1 className="font-display font-semibold text-[28px] text-text-charcoal mb-1">Color System</h1>
      <p className="font-mono text-[9px] tracking-widest text-text-ash uppercase mb-8">18 tokens — 6 groups</p>

      {Object.entries(tokens.colors).map(([group, shades]) => (
        <div key={group} className="mb-8">
          <p className="font-mono text-[8px] tracking-widest uppercase text-text-ash mb-3">
            {group}
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(shades).map(([name, hex]) => {
              const isLight = ['birch','linen','fog','bark','mist','pale','white','pale'].some(l => name.includes(l))
              return (
                <div key={name} className="flex flex-col gap-1.5">
                  <div
                    className="w-[100px] h-[60px] rounded-[10px] border border-black/5"
                    style={{ backgroundColor: hex as string }}
                  />
                  <p className="font-mono text-[8px] text-text-ash leading-tight">{group}/{name}</p>
                  <p className="font-mono text-[9px] text-text-stone">{hex as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  ),
}

// ── TYPE SCALE ──
export const Typography: StoryObj = {
  render: () => (
    <div className="p-6 bg-bg-birch min-h-screen">
      <h1 className="font-display font-semibold text-[28px] text-text-charcoal mb-1">Typography</h1>
      <p className="font-mono text-[9px] tracking-widest text-text-ash uppercase mb-8">3 families — 11 styles</p>

      <div className="space-y-6">
        {[
          { token: 'display/wordmark',  sample: 'Marka',                   cls: 'font-display font-semibold italic text-[36px]' },
          { token: 'display/screen',    sample: 'Explore today\'s nature', cls: 'font-display font-semibold text-[28px]' },
          { token: 'heading/xl',        sample: 'Common Juniper',          cls: 'font-display font-semibold text-[22px]' },
          { token: 'heading/lg',        sample: 'Field Journal',           cls: 'font-display font-semibold text-[18px]' },
          { token: 'latin',             sample: 'Juniperus communis',      cls: 'font-display italic text-[13px]' },
          { token: 'body/lg',           sample: 'A resilient boreal shrub found across northern forests.', cls: 'font-body text-[15px]' },
          { token: 'body/base',         sample: '14 plants catalogued this season.', cls: 'font-body text-[13px]' },
          { token: 'button/label',      sample: 'Save to notebook',        cls: 'font-body font-medium text-[13px]' },
          { token: 'label/mono',        sample: 'EDIBLE · BOREAL · NATIVE', cls: 'font-mono text-[10px] tracking-widest uppercase' },
          { token: 'caption/mono',      sample: 'Today · 09:41',           cls: 'font-mono text-[9px] tracking-wide uppercase' },
        ].map(row => (
          <div key={row.token} className="flex items-baseline gap-6 border-b border-bg-fog pb-4">
            <span className="font-mono text-[8px] text-green-sage w-36 flex-shrink-0 tracking-wide">{row.token}</span>
            <span className={`${row.cls} text-text-charcoal flex-1`}>{row.sample}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ── SHADOWS ──
export const Shadows: StoryObj = {
  render: () => (
    <div className="p-10 bg-bg-birch min-h-screen">
      <h1 className="font-display font-semibold text-[28px] text-text-charcoal mb-1">Shadows</h1>
      <p className="font-mono text-[9px] tracking-widest text-text-ash uppercase mb-8">4 levels</p>

      <div className="flex flex-wrap gap-10 items-end">
        {[
          { token: 'shadow/sm',         cls: 'shadow-sm',         label: 'sm — Cards at rest' },
          { token: 'shadow/md',         cls: 'shadow-md',         label: 'md — Elevated content' },
          { token: 'shadow/lg',         cls: 'shadow-lg',         label: 'lg — Modals' },
          { token: 'shadow/green-glow', cls: 'shadow-green-glow', label: 'green-glow — Primary CTA' },
        ].map(s => (
          <div key={s.token} className="flex flex-col items-center gap-4">
            <div className={`w-24 h-24 rounded-md bg-bg-linen ${s.cls}`} />
            <div className="text-center">
              <p className="font-mono text-[9px] text-green-sage">{s.token}</p>
              <p className="font-mono text-[8px] text-text-ash mt-0.5">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

// ── SPACING ──
export const Spacing: StoryObj = {
  render: () => (
    <div className="p-6 bg-bg-birch min-h-screen">
      <h1 className="font-display font-semibold text-[28px] text-text-charcoal mb-1">Spacing</h1>
      <p className="font-mono text-[9px] tracking-widest text-text-ash uppercase mb-8">4px base unit</p>

      <div className="space-y-3">
        {Object.entries(tokens.spacing).map(([key, value]) => (
          <div key={key} className="flex items-center gap-4">
            <span className="font-mono text-[8px] text-green-sage w-16">{`space/${key}`}</span>
            <div className="h-4 bg-green-moss/20 border-r-2 border-green-moss" style={{ width: value as string }} />
            <span className="font-mono text-[9px] text-text-stone">{value as string}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
