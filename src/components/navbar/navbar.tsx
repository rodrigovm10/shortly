import Link from 'next/link'
import { GitHubLogo } from '../logos/github'
import { Button, buttonVariants } from '../ui/button'
import { Link2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2 font-bold'
        >
          <Link2 className='size-6 sm:size-8 -rotate-16 transition-transform hover:rotate-0' />
          <span className='text-lg sm:text-2xl '>ShortLink</span>
        </Link>

        <div className='flex items-center gap-4'>
          <Link
            className={cn(buttonVariants({ variant: 'outline' }), 'hidden sm:flex')}
            href='https://github.com/rodrigovm10/shortly'
            target='_blank'
          >
            <GitHubLogo />
            <span>Star on GitHub</span>
          </Link>
          <Link href='/signin'>
            <Button
              variant='ghost'
              size='sm'
            >
              Sign In
            </Button>
          </Link>
          <Link href='/signup'>
            <Button size='sm'>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
