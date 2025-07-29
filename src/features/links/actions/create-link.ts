'use server'

import { revalidatePath } from 'next/cache'
import { Link } from '@/shared/types/database'
import { createClient } from '@/db/supabase/server'
import { checkUser } from '@/shared/utils/checkUser'
import { Database } from '../../../../database.types'
import { CreateLinkSchema } from '../schema/create-link'

export const createLink = async (
  link: CreateLinkSchema
): Promise<[error?: string, success?: string, data?: Link]> => {
  const supabase = await createClient<Database>()

  const [userError, userId] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const { originalUrl, shortLink, description } = link

  const { data, error } = await supabase
    .from('urls')
    .insert({
      short_code: shortLink,
      original_url: originalUrl,
      description: description || '',
      user_id: userId,
    })
    .select('*')
    .single()

  if (error) {
    return [error.message, undefined]
  }

  // revalidatePath('/dashboard/links')

  return [undefined, `Link created successfully: ${data.short_code}`, data]
}
