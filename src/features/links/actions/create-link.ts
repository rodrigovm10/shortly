'use server'

import { createClient } from '@/db/supabase/server'
import { Database } from '@/shared/types/supabase'
import { CreateLinkSchema } from '../schema/link'
import { revalidatePath } from 'next/cache'

export const createLink = async (
  link: CreateLinkSchema
): Promise<[error?: string, success?: string]> => {
  const supabase = await createClient<Database>()

  const { data: user } = await supabase.auth.getUser()

  if (!user) {
    return ['User not authenticated', undefined]
  }

  const { originalUrl, shortLink, description } = link

  const { data, error } = await supabase
    .from('urls')
    .insert({
      short_code: shortLink,
      original_url: originalUrl,
      description: description || '',
      user_id: user.user?.id || null,
    })
    .select('*')
    .single()

  if (error) {
    return [error.message, undefined]
  }

  revalidatePath('/dashboard/links')

  return [undefined, `Link created successfully: ${data.short_code}`]
}
