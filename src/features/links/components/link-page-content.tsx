'use client'

import { useState } from 'react'
import { Boxes } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Link, Status } from '@/shared/types/database'

import { NoFoundLinks } from './no-found-links'
import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'
import { Filters } from '@/features/links/components/filters/filters'
import { buttonVariants } from '@/shared/components/ui/button'
import { useLinkStore } from '../provider/link-provider'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

export type StatusFilter = 'ALL' | Status

export function LinkPageContent() {
  const { links } = useLinkStore(state => state)

  const [filteredLinks, setFilteredLinks] = useState<Link[]>(links)

  const handleSearchFilter = (search: string) => {
    const filtered = links.filter(link => link.short_code.includes(search))

    setFilteredLinks(filtered)
  }

  const handleSelectFilter = (filter: StatusFilter) => {
    if (filter === 'ALL') {
      setFilteredLinks(links)
      return
    }

    const filtered = links.filter(link => link.status === filter)
    setFilteredLinks(filtered)
  }

  return (
    <>
      <section className='flex items-center justify-between gap-2 mb-4'>
        <Filters
          onFilter={handleSearchFilter}
          onSelect={handleSelectFilter}
        />
        <div className='flex items-center gap-2'>
          <Tooltip>
            <TooltipTrigger>
              <span
                className={cn(buttonVariants({ variant: 'outline' }), 'text-xs hover:text-white')}
              >
                <Boxes size={14} />
                {links.length}/30
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>You have {links.length} links. You can create up to 30 links.</p>
            </TooltipContent>
          </Tooltip>
          <CreateLink />
        </div>
      </section>
      {filteredLinks && filteredLinks.length > 0 ? <ListLinks links={links} /> : <NoFoundLinks />}
    </>
  )
}
