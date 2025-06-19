import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'

interface Props {
  user: {
    name: string
    image?: string
  }
}

export function UserAvatar({ user }: Props) {
  return (
    <Avatar>
      <AvatarImage
        src={user.image || 'https://avatars.githubusercontent.com/u/1?v=4'}
        alt={user.name}
      />
      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}
