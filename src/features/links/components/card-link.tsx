import { Link } from '@/shared/types/database'

import { CopyLink } from './link-actions/copy-link'
import { DeleteLink } from './link-actions/delete-link'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { EditLink } from './link-actions/edit-link'

interface Props {
  link: Link
}

export function CardLink({ link }: Props) {
  return (
    <Card key={link.id}>
      <CardContent className='flex justify-between '>
        <section className=''>
          <h3 className='font-bold'>
            <span className='opacity-70'>/</span>
            {link.short_code}
          </h3>
          <p>{link.original_url}</p>
        </section>
        <section className='flex gap-4 items-start'>
          <div className='flex gap-2 items-start'>
            <span className='text-xs'>{link.clicks} clicks</span>
            <ChartNoAxesColumnIncreasing size={14} />
          </div>
          <CopyLink link={link} />
          <EditLink link={link} />
          <DeleteLink link={{ id: link.id, shortCode: link.short_code }} />
        </section>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <span className='text-xs text-muted-foreground font-semibold'>
          {new Date(link.created_at).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </CardFooter>
    </Card>
  )
}
