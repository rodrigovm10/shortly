import { EnvConfig } from '@/shared/config/envs'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { authRoutes, DEFAULT_LOGIN_REDIRECT_URL, protectedRoutes, publicRoutes } from '../routes'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    EnvConfig().NEXT_PUBLIC_SUPABASE_URL!,
    EnvConfig().NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { nextUrl } = request
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isLoggedIn = !!user

  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

  // ⚙️ Is Auth Route. First, check is authenticated:
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl))
    }
  }

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/auth/login`, nextUrl))
  }

  if (isPublicRoute) {
    // If the route is public, we don't need to do anything special
    return NextResponse.next({
      request,
    })
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!api/|_next/|images/|docs/|_proxy/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
}
