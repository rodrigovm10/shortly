import { User } from '@supabase/supabase-js'

import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'

export function General({ user }: { user: User }) {
  return (
    <Card>
      <CardTitle>General</CardTitle>
      <CardDescription>Look your information.</CardDescription>
      <Separator />
      <CardContent className='space-y-3 sm:space-y-4'>
        <div className='space-y-2'>
          <Label className='font-normal text-sm sm:text-base'>Your Name:</Label>
          <Input
            disabled
            value={user?.user_metadata.name}
            className='h-8 sm:h-9'
          />
        </div>

        <div className='space-y-2'>
          <Label className='font-normal text-sm sm:text-base'>Your Email:</Label>
          <Input
            disabled
            value={user?.email}
            className='h-8 sm:h-9'
          />
        </div>
      </CardContent>
    </Card>
  )
}
