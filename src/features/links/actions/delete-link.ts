'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/db/supabase/server'
import { retrieveLinkById } from './retrieve-links'
import { checkUser } from '@/shared/utils/checkUser'
import { Database } from '../../../../database.types'

export const deleteLink = async (
  linkId: string,
  shortCode: string
): Promise<[error?: string, result?: string]> => {
  const supabase = await createClient<Database>()

  const [userError, userId] = await checkUser()

  if (userError) {
    return [userError, undefined]
  }

  const [error, linkExists] = await retrieveLinkById(linkId)

  if (error) {
    return [error, undefined]
  }

  if (linkExists?.short_code !== shortCode) return ['Short link does not match the link', undefined]

  const { error: deleteError } = await supabase
    .from('urls')
    .delete()
    .eq('user_id', userId!)
    .eq('short_code', shortCode)
    .eq('id', linkId)
    .single()

  if (deleteError) {
    return [deleteError.message, undefined]
  }

  revalidatePath('/dashboard/links')
  return [undefined, 'Link deleted successfully']
}
