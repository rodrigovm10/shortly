import { redirect } from 'next/navigation'
import { createClient } from '@/db/supabase/server'

import { LoginCard } from '@/features/auth/components/login-card'

export default async function LoginPage() {
  const supabase = await createClient()
  const session = await supabase.auth.getUser()

  if (session.data.user) {
    redirect('/')
  }

  return (
    <main className='px-8 mt-28'>
      {' '}
      <LoginCard />
    </main>
  )
}
