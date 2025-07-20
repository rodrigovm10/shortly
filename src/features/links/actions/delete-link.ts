'use server'

import { Database } from '@/shared/types/supabase'
import { createClient } from '@/db/supabase/server'
import { retrieveLinkById } from './retrieve-links'
import { revalidatePath } from 'next/cache'

export const deleteLink = async (
  linkId: string,
  shortCode: string
): Promise<[error?: string, result?: string]> => {
  const supabase = await createClient<Database>()

  const { data: user } = await supabase.auth.getUser()

  if (!user) {
    return ['User not authenticated', undefined]
  }

  const [error, linkExists] = await retrieveLinkById(linkId)

  if (error) {
    return [error, undefined]
  }

  if (linkExists?.short_code !== shortCode) return ['Short link does not match the link', undefined]

  const { data, error: deleteError } = await supabase
    .from('urls')
    .delete()
    .eq('user_id', user.user?.id!)
    .eq('short_code', shortCode)
    .eq('id', linkId)
    .single()

  if (deleteError) {
    return [deleteError.message, undefined]
  }

  console.log()

  revalidatePath('/dashboard/links')
  return [undefined, 'Link deleted successfully']
}
