import { createClient } from '@/db/supabase/client'

const supabase = createClient()
export async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })

  console.log('signInWithGithub', data, error)
}
