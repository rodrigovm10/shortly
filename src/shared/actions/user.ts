'use server'

import { createClient } from '@/db/supabase/server'

export const getUser = async () => {
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
