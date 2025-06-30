'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from '@/features/auth/actions/auth'

import { HeartCrack, Loader } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Separator } from '@/shared/components/ui/separator'
import { deleteAccount } from '../../actions/delete-account'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'

export function DangerZone() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDeleteAccount = () => {
    startTransition(async () => {
      const [error, success] = await deleteAccount()

      if (success) {
        await signOut()
        toast.success(success)
        router.push('/')
      }

      if (error) {
        toast.error(error)
        return
      }
    })
  }

  return (
    <Card>
      <CardTitle>Danger zone</CardTitle>
      <Separator />
      <CardDescription className='px-6'>
        Deleting your account is permanent and cannot be undone. All your data will be deleted.
      </CardDescription>
      <CardContent className='space-y-4'>
        <Button
          variant='destructive'
          className='font-semibold'
          disabled={isPending}
          onClick={handleDeleteAccount}
        >
          {isPending ? <Loader className='animate-spin mr-2' /> : <HeartCrack className='mr-2' />}
          Delete Account
        </Button>
      </CardContent>
    </Card>
  )
}
