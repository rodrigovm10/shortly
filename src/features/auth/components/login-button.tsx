'use client'

import { Loader } from 'lucide-react'
import { Provider } from '../types/login'
import { Button } from '@/shared/components/ui/button'
import { GithubLogo, GoogleLogo } from '@/shared/components/icons'

interface Props {
  provider: Provider
  isPending: boolean
  onClick: (provider: Provider) => void
  disabled?: boolean
}

const providerIcons = {
  google: (
    <GoogleLogo
      width={20}
      height={20}
    />
  ),
  github: (
    <GithubLogo
      width={20}
      height={20}
    />
  ),
}

export function LoginButton({ provider, isPending, onClick, disabled }: Props) {
  const label = `Continue with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`
  return (
    <Button
      variant='outline'
      onClick={() => onClick(provider)}
      disabled={disabled || isPending}
    >
      {isPending ? <Loader className='animate-spin' /> : providerIcons[provider]}
      <span>{label}</span>
    </Button>
  )
}
