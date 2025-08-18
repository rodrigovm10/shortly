'use client'

import { Boxes } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Status } from '@/shared/types/database'
import { MAX_LINKS } from '../utils/constants'

import { NoFoundLinks } from './no-found-links'
import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'
import { Filters } from '@/features/links/components/filters/filters'
import { buttonVariants } from '@/shared/components/ui/button'
import { useLinkStore } from '../provider/link-provider'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

export type StatusFilter = 'ALL' | Status

export function LinkPageContent() {
  const { links, searchLink, selectLink } = useLinkStore(state => state)

  const handleSearchFilter = (search: string) => {
    searchLink(search)
  }

  const handleSelectFilter = (filter: StatusFilter) => {
    selectLink(filter)
  }

  return (
    <>
      <section className='flex items-center justify-between gap-2 mb-4'>
        <Filters
          onSearch={handleSearchFilter}
          onSelect={handleSelectFilter}
        />
        <div className='flex items-center gap-2'>
          <Tooltip>
            <TooltipTrigger>
              <span
                className={cn(buttonVariants({ variant: 'outline' }), 'text-xs hover:text-white')}
              >
                <Boxes size={14} />
                {links.length}/{MAX_LINKS}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>You have {links.length} links. You can create up to 30 links.</p>
            </TooltipContent>
          </Tooltip>
          <CreateLink />
        </div>
      </section>
      {links.length > 0 ? <ListLinks links={links} /> : <NoFoundLinks />}
    </>
  )
}
