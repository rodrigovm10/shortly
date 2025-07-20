import { Database } from '../types/supabase'
import { createClient } from '@/db/supabase/server'

export const checkUser = async (): Promise<[error?: string, userId?: string]> => {
  const supabase = await createClient<Database>()

  const { data: user } = await supabase.auth.getUser()

  if (!user) {
    return ['User not authenticated', undefined]
  }

  return [undefined, user.user?.id || '']
}
