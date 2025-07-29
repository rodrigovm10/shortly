'use client'

import { useState } from 'react'
import { Link, Status } from '@/shared/types/database'

import { NoFoundLinks } from './no-found-links'
import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'
import { Filters } from '@/features/links/components/filters/filters'
import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { Boxes } from 'lucide-react'
import { useLinkStore } from '../provider/link-provider'

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
        <div className='flex items-center gap-4'>
          <span className={cn(buttonVariants({ variant: 'outline' }), 'text-xs')}>
            <Boxes size={14} />
            {links.length}/30
          </span>
          <CreateLink />
        </div>
      </section>
      {filteredLinks && filteredLinks.length > 0 ? <ListLinks links={links} /> : <NoFoundLinks />}
    </>
  )
}
