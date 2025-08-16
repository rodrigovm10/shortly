import { Link } from '@/shared/types/database'

import { InfoLink } from './info-link'
import { CopyLink } from './link-actions/copy-link'
import { EditLink } from './link-actions/edit-link'
import { DeleteLink } from './link-actions/delete-link'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'

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
