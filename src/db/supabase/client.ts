import { EnvConfig } from '@/shared/config/envs'
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    EnvConfig().NEXT_PUBLIC_SUPABASE_URL,
    EnvConfig().NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
