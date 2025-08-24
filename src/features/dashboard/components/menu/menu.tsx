'use client'

import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { usePathname } from 'next/navigation'
import { Link2, Settings } from 'lucide-react'

const links = [
  { id: 'links', label: 'Links', icon: Link2 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export function Menu() {
  const pathname = usePathname()

  return (
    <div className='flex gap-4 mb-4 md:hidden w-screen border-b'>
      {links.map(link => (
        <Link
          key={link.id}
          href={`/dashboard/${link.id}`}
          className={cn(
            'flex items-center gap-2 group pb-4',
            pathname === `/dashboard/${link.id}` ? 'border-b-2 border-primary' : 'opacity-80'
          )}
        >
          <link.icon
            size={14}
            className='group-hover:rotate-45 transition-transform duration-300'
          />
          <span className='text-sm font-medium'>{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
