'use server'

import { getUser } from '@/shared/actions/user'
import { EnvConfig } from '@/shared/config/envs'
import { createClient } from '@supabase/supabase-js'

export const deleteAccount = async (): Promise<[error?: string, success?: string]> => {
  const supabase = createClient(
    EnvConfig().NEXT_PUBLIC_SUPABASE_URL,
    EnvConfig().SUPABASE_SERVICE_ROLE_KEY
  )

  const user = await getUser()

  if (!user) {
    throw new Error('User not found')
  }

  const { data: userDeletedData, error } = await supabase.auth.admin.deleteUser(user.id)

  if (error) {
    throw new Error('Failed to delete user profile')
  }

  if (userDeletedData) {
    return [undefined, 'Account deleted successfully']
  }

  // If no userDeletedData and no error, return a default value
  return ['Unknown error occurred', undefined]
}
