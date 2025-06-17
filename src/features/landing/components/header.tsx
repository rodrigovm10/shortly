import Link from 'next/link'
import { createClient } from '@/db/supabase/server'
import { SignOut } from '@/features/auth/components/sign-out'

import { Logo } from '@/shared/components/logo'
import { ThemeToggle } from '@/shared/components/theme-toggle'
import { buttonVariants } from '@/shared/components/ui/button'

export async function Header() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

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
        {user.data.user ? (
          <SignOut />
        ) : (
          <Link
            href='/auth/login'
            className={buttonVariants({ variant: 'default' })}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}
