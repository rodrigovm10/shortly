import { Separator } from '@/shared/components/ui/separator'
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/components/ui/card'
import { ExportJSON } from './exports/export-json'

export function Export() {
  return (
    <Card>
      <CardTitle>Export Your Links</CardTitle>
      <Separator />
      <CardDescription className='px-6'>
        You can export all the links you have saved in your account.
      </CardDescription>
      <CardContent className='space-y-4'>
        <ExportJSON />
      </CardContent>
    </Card>
  )
}
