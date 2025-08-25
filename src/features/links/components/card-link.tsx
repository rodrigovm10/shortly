import { Link } from '@/shared/types/database'

import { InfoLink } from './info-link'
import { ChevronDown } from 'lucide-react'
import { CopyLink } from './link-actions/copy-link'
import { EditLink } from './link-actions/edit-link'
import { ShareLink } from './link-actions/share-link'
import { DeleteLink } from './link-actions/delete-link'
import { CopyLinkShortCode } from './copy-link-short-code'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/components/ui/collapsible'

interface Props {
  link: Link
}

export function CardLink({ link }: Props) {
  return (
    <Card key={link.id}>
      <CardContent className='flex justify-between '>
        <section className=''>
          <CopyLinkShortCode link={link} />
          <p className='text-sm text-muted-foreground font-bold break-all'>{link.original_url}</p>
        </section>
        <section className='flex gap-4 items-start '>
          <InfoLink
            link={link}
            className='hidden md:flex'
          />
          <ShareLink link={link} />
          <CopyLink link={link} />
          <EditLink link={link} />
          <DeleteLink link={{ id: link.id, shortCode: link.short_code }} />
        </section>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Collapsible className='block md:hidden'>
          <CollapsibleTrigger className='flex items-center cursor-pointer gap-2'>
            <ChevronDown size={12} />
            <p className='text-xs text-muted-foreground font-semibold'>Info</p>
          </CollapsibleTrigger>
          <CollapsibleContent className='flex flex-col gap-2 mt-4'>
            <InfoLink
              link={link}
              className='md:hidden '
            />
            <p className='text-xs text-muted-foreground '>{link?.description}</p>
          </CollapsibleContent>
        </Collapsible>
        <p className='text-xs text-muted-foreground hidden md:block'>{link?.description}</p>
        <span className='text-xs text-muted-foreground font-semibold self-start'>
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
