import { Logo } from '@/shared/components/logo'
import { ThemeToggle } from '@/shared/components/theme-toggle'
import { Button } from '@/shared/components/ui/button'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className='flex items-center justify-between py-4 px-8 sm:px-24 border-b'>
      <Link
        href='/'
        className='group'
      >
        <div className='flex items-center font-bold justify-center gap-2'>
          <Logo />{' '}
          <span className='text-2xl font-bold'>
            Short<span className='text-primary'>ly</span>
          </span>
        </div>
      </Link>
      <nav className='flex items-center gap-4'>
        <ThemeToggle />
        <Button>Login</Button>
      </nav>
    </header>
  )
}
