import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { BottomNav, ScreenHeader } from '../components/Navigation'

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 9.5L11 3l8 6.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 20v-8h6v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)
const ExploreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="11" cy="11" r="2" fill="currentColor"/>
    <path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const NotebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 7h3M4 11h3M4 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const ProfileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const navItems = [
  { id: 'home',     label: 'Home',     icon: <HomeIcon /> },
  { id: 'explore',  label: 'Explore',  icon: <ExploreIcon /> },
  { id: 'notebook', label: 'Notebook', icon: <NotebookIcon /> },
  { id: 'profile',  label: 'Profile',  icon: <ProfileIcon /> },
]

const meta: Meta = {
  title: 'Marka/Navigation',
  parameters: {
    layout: 'centered',
  },
}
export default meta

export const BottomNavLight: StoryObj = {
  render: () => {
    const [active, setActive] = useState('home')
    return (
      <div className="w-[375px]">
        <BottomNav
          items={navItems}
          activeId={active}
          onSelect={setActive}
          onCamera={() => alert('Open camera')}
          theme="light"
        />
      </div>
    )
  },
}
BottomNavLight.storyName = 'BottomNav — Light'

export const BottomNavDark: StoryObj = {
  render: () => {
    const [active, setActive] = useState('home')
    return (
      <div className="w-[375px] bg-dark-forest rounded-b-xl">
        <BottomNav
          items={navItems}
          activeId={active}
          onSelect={setActive}
          onCamera={() => alert('Open camera')}
          theme="dark"
        />
      </div>
    )
  },
  parameters: { backgrounds: { default: 'forest', values: [{ name: 'forest', value: '#1A1F16' }] } },
}
BottomNavDark.storyName = 'BottomNav — Dark'

export const Header: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 w-[375px]">
      <ScreenHeader
        title="Common Juniper"
        onBack={() => alert('Back')}
        onShare={() => alert('Share')}
        theme="light"
      />
      <ScreenHeader
        title="Camera"
        onBack={() => alert('Back')}
        theme="dark"
      />
    </div>
  ),
}
Header.storyName = 'ScreenHeader'
