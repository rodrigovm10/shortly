'use server'

import { EnvConfig } from '@/shared/config/envs'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient<T>() {
  const cookieStore = await cookies()

  return createServerClient<T>(
    EnvConfig().NEXT_PUBLIC_SUPABASE_URL!,
    EnvConfig().NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
