import Link from 'next/link'
import { Rocket } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { GithubLogo } from '@/shared/components/icons'
import { createClient } from '@/db/supabase/server'
import { buttonVariants } from '@/shared/components/ui/button'

export async function Actions() {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()

  const route = user ? '/dashboard' : '/auth/login'
  return (
    <section className='flex  items-center justify-center gap-4'>
      <Link
        href={route}
        className={cn(buttonVariants({ variant: 'default' }))}
      >
        <Rocket />
        Shorten URL
      </Link>
      <Link
        href='https://github.com/rodrigovm10/shortly'
        target='_blank'
        className={cn(buttonVariants({ variant: 'outline' }))}
      >
        <GithubLogo />
        Star on Github
      </Link>
    </section>
  )
}
