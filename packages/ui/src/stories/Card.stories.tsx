import type { Meta, StoryObj } from '@storybook/react'
import { FindCard, FeaturedCard, PlantResultCard, NotebookStrip } from '../components/Card'

const meta: Meta = {
  title: 'Marka/Cards',
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'birch', values: [{ name: 'birch', value: '#F5F0E8' }] },
  },
}
export default meta

export const Find: StoryObj = {
  render: () => (
    <div className="flex gap-3 p-4">
      <FindCard name="Wood Fern"      latin="Dryopteris"     date="Today"      imageBg="bg-green-pale"  />
      <FindCard name="Birch Polypore" latin="Fomitopsis"     date="Yesterday"  imageBg="bg-amber-pale"  />
      <FindCard name="Lingonberry"    latin="V. vitis-idaea" date="Feb 14"     imageBg="bg-berry-pale"  />
    </div>
  ),
}
Find.storyName = 'FindCard'

export const Featured: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 w-[343px]">
      <FeaturedCard
        name="Common Juniper"
        latin="Juniperus communis"
        tags={['Edible', 'Common']}
        bgColor="#4A6741"
      />
      <FeaturedCard
        name="Arctic Poppy"
        latin="Papaver radicatum"
        tags={['Rare', 'Protected']}
        bgColor="#4F4F6B"
      />
    </div>
  ),
}
Featured.storyName = 'FeaturedCard'

export const PlantResult: StoryObj = {
  render: () => (
    <div className="w-[343px] p-2">
      <PlantResultCard
        name="Common Juniper"
        latin="Juniperus communis"
        confidence={97}
        imageBg="#4A6741"
        tags={[
          { label: 'Edible',    variant: 'green' },
          { label: 'Conifer',   variant: 'green' },
          { label: 'Medicinal', variant: 'amber' },
          { label: 'Boreal',    variant: 'green' },
        ]}
        description="Resilient evergreen shrub found across boreal forests of the Northern Hemisphere. Berries used to flavor gin and cured meats for centuries in Nordic cuisine."
        onSave={() => alert('Saved!')}
        onLearnMore={() => alert('Learn more')}
      />
    </div>
  ),
}
PlantResult.storyName = 'PlantResultCard'

export const Notebook: StoryObj = {
  render: () => (
    <div className="p-4 w-[343px]">
      <NotebookStrip count={14} weekCount={3} onClick={() => alert('Open notebook')} />
    </div>
  ),
}
Notebook.storyName = 'NotebookStrip'
