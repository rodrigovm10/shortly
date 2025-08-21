'use server'

import { createClient } from '@/db/supabase/server'
import { EditLinkSchema } from '../schema/edit-link'
import { checkUser } from '@/shared/utils/checkUser'

export const editLink = async (
  link: EditLinkSchema,
  linkId: string
): Promise<[error?: string, success?: string]> => {
  const supabase = await createClient()

  const [userError] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const { originalUrl, shortLink, description } = link

  const { data, error } = await supabase
    .from('urls')
    .update({
      original_url: originalUrl,
      short_code: shortLink,
      description: description,
    })
    .eq('id', linkId)
    .select('*')
    .single()

  if (error) {
    return [error.message, undefined]
  }

  return [undefined, `Link updated successfully: ${data.short_code}`]
}
