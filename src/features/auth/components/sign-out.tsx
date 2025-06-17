'use client'

import { Button } from '@/shared/components/ui/button'
import { signOut } from '../actions/auth'

export function SignOut() {
  return <Button onClick={signOut}>Sign Out</Button>
}
