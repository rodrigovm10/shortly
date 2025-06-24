'use server'

import { createClient } from '@/db/supabase/server'
import { EnvConfig } from '@/shared/config/envs'
import { redirect } from 'next/navigation'

export const signInWith = async (provider: 'github' | 'google') => {
  const supabase = await createClient()
  const authCallbackUrl = `${EnvConfig().SITE_URL}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: authCallbackUrl,
    },
  })

  if (error) console.log(error)

  if (data?.url) redirect(data.url)
}

export const signOut = async () => {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()

  if (!error) return true

  if (error) {
    console.error('Error signing out:', error)
    return
  }
}
