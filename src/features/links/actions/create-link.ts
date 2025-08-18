'use server'

import { Link } from '@/shared/types/database'
import { MAX_LINKS } from '../utils/constants'
import { createClient } from '@/db/supabase/server'
import { checkUser } from '@/shared/utils/checkUser'
import { CreateLinkSchema } from '../schema/create-link'
import { generateShortCode } from '../utils/generate-short-code'

export const createLink = async (
  link: CreateLinkSchema
): Promise<[error?: string, success?: string, data?: Link]> => {
  const supabase = await createClient()

  const [userError, userId] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const { originalUrl, description } = link

  const { data: links } = await supabase.from('urls').select('*').eq('user_id', userId!)

  if (links && links.length === MAX_LINKS) {
    return ['You have reached the maximum number of links', undefined]
  }

  const { data, error } = await supabase
    .from('urls')
    .insert({
      short_code: generateShortCode(),
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
