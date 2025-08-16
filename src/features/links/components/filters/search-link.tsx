'use client'

import { useState } from 'react'

import { Input } from '@/shared/components/ui/input'

interface Props {
  onSearch: (search: string) => void
}

export function SearchLink({ onSearch }: Props) {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearch(value)
  }

  return (
    <Input
      placeholder='Search links'
      value={search}
      onChange={handleSearch}
    />
  )
}
