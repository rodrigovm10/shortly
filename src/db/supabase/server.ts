import { cookies } from 'next/headers'
import { EnvConfig } from '@/shared/config/envs'
import { createServerClient } from '@supabase/ssr'
import { Database } from '../../../database.types'

const supabaseUrl = EnvConfig().NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = EnvConfig().NEXT_PUBLIC_SUPABASE_ANON_KEY

export const createClient = async () => {
  const cookieStore = await cookies()
  return createServerClient<Database>(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
