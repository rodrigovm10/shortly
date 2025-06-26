'use server'

import { User } from '@supabase/supabase-js'
import { createClient } from '@/db/supabase/server'

export const getUser = async (): Promise<User | null> => {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    console.error('Error fetching user:', error)
    return null
  }

  return user
}
