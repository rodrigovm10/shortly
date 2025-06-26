import { Download } from 'lucide-react'
import { Label } from '@/shared/components/ui/label'
import { Button } from '@/shared/components/ui/button'
import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'

export function Export() {
  return (
    <Card>
      <CardTitle>Export Your Links</CardTitle>
      <Separator />
      <CardDescription className='px-6'>
        You can export all the links you have saved in your account.
      </CardDescription>
      <CardContent className='space-y-4'>
        <Label className='font-semibold text-md'>Export JSON:</Label>
        <Button variant='default'>
          <Download /> Export all links
        </Button>
        <Label className='font-semibold text-md'>Export Excel:</Label>
        <Button
          variant='default'
          className='bg-green-700 hover:bg-green-600'
        >
          <Download /> Export all links
        </Button>
      </CardContent>
    </Card>
  )
}
