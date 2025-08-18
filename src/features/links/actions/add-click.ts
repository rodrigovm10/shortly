'use server'

import { createClient } from '@/db/supabase/server'

export async function addClick(shortCode: string, clicks: number) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('urls')
    .update({ clicks })
    .eq('short_code', shortCode)
    .select()

  if (error) {
    return [error.message, undefined]
  }

  return [undefined, data]
}
