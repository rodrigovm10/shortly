import Link from 'next/link'
import { createClient } from '@/db/supabase/server'

import { Logo } from '@/shared/components/logo'
import { GithubLogo } from '@/shared/components/icons'
import { buttonVariants } from '@/shared/components/ui/button'
import { ThemeToggle } from '@/shared/components/theme-toggle'
import { UserAvatar } from '@/features/dashboard/components/avatar'

export async function Header() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  const { user } = data

  return (
    <header className='flex items-center justify-between py-4 px-8 sm:px-24 border-b'>
      <Link
        href='/'
        className='group'
      >
        <div className='flex items-center font-bold justify-center gap-2'>
          <Logo />{' '}
          <span className='text-xl font-bold'>
            Short<span className='text-primary'>ly</span>
          </span>
        </div>
      </Link>
      <nav className='flex items-center gap-2'>
        <Link
          href='https://github.com/rodrigovm10/shortly'
          target='_blank'
          className={buttonVariants({ variant: 'ghost' })}
        >
          <GithubLogo />
        </Link>
        <ThemeToggle />
        {user ? (
          <UserAvatar
            user={{
              name: user.user_metadata.name,
              image: user?.user_metadata.avatar_url,
              email: user?.email,
            }}
          />
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
