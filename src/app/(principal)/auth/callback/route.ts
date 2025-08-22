import { NextResponse } from 'next/server'
import { createClient } from '@/db/supabase/server'
import { EnvConfig } from '@/shared/config/envs'

export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get('code')
  const next = '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      const appUrl =
        process.env.NODE_ENV === 'development'
          ? new URL(request.url).origin // localhost in dev
          : EnvConfig().NEXT_PUBLIC_APP_URL // always your prod domain

      return NextResponse.redirect(`${appUrl}${next}`)
    }
  }

  return NextResponse.redirect(`${EnvConfig().NEXT_PUBLIC_APP_URL}/auth/auth-code-error`)
}
