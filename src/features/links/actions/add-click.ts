'use server'

import { createClient } from '@/db/supabase/server'
import { Database } from '@/shared/types/supabase'

export async function addClick(shortCode: string) {
  const supabase = await createClient<Database>()

  const { data, error } = await supabase.from('url').update({clicks: }).eq('short_code', shortCode).select()

  if (!response.ok) {
    throw new Error('Failed to add click')
  }

  return response.json()
}
