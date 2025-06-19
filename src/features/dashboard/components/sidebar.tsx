'use client'

import { usePathname } from 'next/navigation'
import { LinkIcon, Settings } from 'lucide-react'
import { SidebarMenuItem } from './sidebar/sidebar-menu-item'

const items = [
  { href: '/dashboard/links', label: 'Links', icon: LinkIcon },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className='group w-12 hover:w-52 transition-all duration-300 border-r overflow-hidden'>
      <nav className='flex flex-col gap-2 p-2 items-center'>
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <SidebarMenuItem
              key={href}
              href={href}
              active={active}
            >
              <Icon className='shrink-0 size-4' />
              <span className='truncate transition-[width, height, padding] duration-300 opacity-0 group-hover:opacity-100'>
                {label}
              </span>
            </SidebarMenuItem>
          )
        })}
      </nav>
    </aside>
  )
}
