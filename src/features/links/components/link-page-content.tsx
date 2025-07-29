'use client'

import { useState } from 'react'
import { Link, Status } from '@/shared/types/database'

import { NoFoundLinks } from './no-found-links'
import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'
import { Filters } from '@/features/links/components/filters/filters'
import { useLinkStore } from '../store/link'

interface Props {
  initialLinks: Link[]
}

export type StatusFilter = 'ALL' | Status

export function LinkPageContent({ initialLinks }: Props) {
  const { links } = useLinkStore({ links: initialLinks }).getState()

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
        <CreateLink />
      </section>
      {filteredLinks && filteredLinks.length > 0 ? <ListLinks links={links} /> : <NoFoundLinks />}
    </>
  )
}
