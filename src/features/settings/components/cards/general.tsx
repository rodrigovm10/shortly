import { User } from '@supabase/supabase-js'

import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'

export function General({ user }: { user: User }) {
  return (
    <Card className='max-w-[500px]'>
      <CardTitle>General</CardTitle>
      <CardDescription className='px-6'>Look your information.</CardDescription>
      <Separator />
      <CardContent className='space-y-4'>
        <Label className='font-normal'>Your Name:</Label>
        <Input
          disabled
          value={user?.user_metadata.name}
        />

        <Label className='font-normal'>Your Email:</Label>
        <Input
          disabled
          value={user?.email}
        />
      </CardContent>
    </Card>
  )
}
