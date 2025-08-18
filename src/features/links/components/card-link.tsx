import { Link } from '@/shared/types/database'

import { InfoLink } from './info-link'
import { CopyLink } from './link-actions/copy-link'
import { EditLink } from './link-actions/edit-link'
import { DeleteLink } from './link-actions/delete-link'
import { CopyLinkShortCode } from './copy-link-short-code'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'

interface Props {
  link: Link
}

export function CardLink({ link }: Props) {
  return (
    <Card key={link.id}>
      <CardContent className='flex justify-between '>
        <section className=''>
          <CopyLinkShortCode link={link} />
          <p className='text-sm text-muted-foreground font-bold'>{link.original_url}</p>
        </section>
        <section className='flex gap-4 items-start '>
          <InfoLink
            link={link}
            className='hidden md:flex'
          />
          <CopyLink link={link} />
          <EditLink link={link} />
          <DeleteLink link={{ id: link.id, shortCode: link.short_code }} />
        </section>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <InfoLink
          link={link}
          className='md:hidden '
        />
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
