import { getUser } from '@/shared/actions/user'
import { UserAvatar } from './avatar'
import { ThemeToggle } from '@/shared/components/theme-toggle'

export async function Header() {
  const user = await getUser()
  console.log(user)
  return (
    <header className='h-16 flex items-center justify-between px-6 border-b'>
      <h1 className='text-xl font-bold'>shortly</h1>
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
