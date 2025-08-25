import Link from 'next/link'
import { UserAvatar } from './avatar'

import { getUser } from '@/shared/actions/user'
import { Logo } from '@/shared/components/logo'
import { ThemeToggle } from '@/shared/components/theme-toggle'

export async function Header() {
  const user = await getUser()

  return (
    <header className='h-16 flex items-center justify-between px-6 md:border-b'>
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
      <nav className='flex items-center gap-4'>
        <ThemeToggle />
        <UserAvatar
          user={{
            name: user?.user_metadata.name,
            image: user?.user_metadata.avatar_url,
            email: user?.email,
          }}
        />
      </nav>
    </header>
  )
}
