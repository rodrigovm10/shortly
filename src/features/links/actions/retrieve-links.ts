'use server'

import { Database } from '@/shared/types/supabase'
import { createClient } from '@/db/supabase/server'
import { checkUser } from '@/shared/utils/checkUser'

export type URL = Database['public']['Tables']['urls']['Row']

export const retrieveLinks = async (): Promise<[error?: string, result?: URL[]]> => {
  const supabase = await createClient<Database>()

  const [userError, userId] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const { data, error } = await supabase.from('urls').select('*').eq('user_id', userId!)

  if (error) {
    return [error.message, undefined]
  }

  if (data.length === 0) {
    return ['No links found for this user', undefined]
  }

  return [undefined, data]
}

export const retrieveLinkById = async (linkId: string): Promise<[error?: string, result?: URL]> => {
  const supabase = await createClient<Database>()
  const [userError, userId] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq('user_id', userId!)
    .eq('id', linkId)
    .single()

  if (error) {
    return [error.message, undefined]
  }

  if (!data) {
    return ['No link found with the provided ID', undefined]
  }

  return [undefined, data]
}

export const retrieveLinkByShortCode = async (
  shortCode: string
): Promise<[error?: string, result?: URL]> => {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq('short_code', shortCode)
    .single()

  console.log(error)
  if (error) {
    return [error.message, undefined]
  }

  if (!data) {
    return ['No link found with the provided ID', undefined]
  }

  return [undefined, data]
}
