'use client'

import { signInWith } from '../actions/auth'
import { useState, useTransition } from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/shared/components/ui/card'
import { LoginButton } from './login-button'
import { Provider } from '../types/login'

export function LoginCard() {
  const [isPending, startStransition] = useTransition()
  const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null)

  const handleSignInWith = (provider: 'google' | 'github') => {
    setLoadingProvider(provider)
    startStransition(() => {
      signInWith(provider)
    })
  }

  return (
    <Card className='max-w-xs mx-auto duration-500 animate-in fade-in-5 slide-in-from-bottom-5'>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl font-semibold'>Log in to Shortly</CardTitle>
        <CardDescription>Log in with your favorite social provider to get started:</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <LoginButton
          provider='google'
          onClick={handleSignInWith}
          disabled={loadingProvider === 'github'}
          isPending={loadingProvider === 'google' && isPending}
        />
        <LoginButton
          provider='github'
          onClick={handleSignInWith}
          disabled={loadingProvider === 'google'}
          isPending={loadingProvider === 'github' && isPending}
        />
      </CardContent>
    </Card>
  )
}
