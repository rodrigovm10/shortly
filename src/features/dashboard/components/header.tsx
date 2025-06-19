import { getUser } from '@/shared/actions/user'
import { UserAvatar } from './avatar'

export async function Header() {
  const user = await getUser()

  return (
    <header className='h-16 flex items-center justify-between px-6 border-b'>
      <h1 className='text-xl font-bold'>shortly</h1>
      <div className='flex items-center gap-4'>
        <UserAvatar
          user={{ name: user?.user_metadata.name, image: user?.user_metadata.avatar_url }}
        />
      </div>
    </header>
  )
}
