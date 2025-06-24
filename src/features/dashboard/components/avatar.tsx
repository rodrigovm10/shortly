'use client'

import { signOut } from '@/features/auth/actions/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import { Bug, CircleUserRound, Home, LayoutDashboard, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface Props {
  user: {
    name: string
    image?: string
    email?: string
  }
}

export function UserAvatar({ user }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleSignOut = async () => {
    startTransition(() => {
      toast.promise(signOut, {
        loading: 'Logging out...',
        success: 'Logged out successfully',
      })

      redirect('/')
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer '>
        <Avatar>
          <AvatarImage
            src={user.image || 'https://avatars.githubusercontent.com/u/1?v=4'}
            alt={user.name}
          />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href='/'>
          <DropdownMenuItem className='cursor-pointer'>
            <Home />
            <span>Home</span>
          </DropdownMenuItem>
        </Link>
        <Link href='/dashboard'>
          <DropdownMenuItem className='cursor-pointer'>
            <LayoutDashboard />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>

        <Link href='/dashboard/settings'>
          <DropdownMenuItem className='cursor-pointer'>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className='cursor-pointer'>
          <Bug />
          <span>Report a Bug</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='cursor-pointer'>
          <CircleUserRound />
          Contact
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onClick={handleSignOut}
          disabled={isPending}
        >
          <LogOut />
          <span>Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
