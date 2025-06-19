import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

interface Props {
  href: string
  children: React.ReactNode
  active?: boolean
}

export function SidebarMenuItem({ href, children, active = false }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-md p-2 text-sm transition-colors',
        'overflow-hidden whitespace-nowrap w-full',
        active
          ? 'bg-sidebar-primary hover:bg-sidebar-primary/85 font-medium text-white'
          : 'hover:bg-sidebar-accent'
      )}
    >
      {children}
    </Link>
  )
}
