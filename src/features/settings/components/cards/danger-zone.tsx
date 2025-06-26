import { HeartCrack } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'

export function DangerZone() {
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
        >
          <HeartCrack /> Delete Account
        </Button>
      </CardContent>
    </Card>
  )
}
