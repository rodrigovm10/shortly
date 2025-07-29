import { Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { StatusFilter } from '../link-page-content'
import { Button } from '@/shared/components/ui/button'
import { SearchLink } from '@/features/links/components/filters/search-link'

interface Props {
  onFilter: (search: string) => void
  onSelect: (status: StatusFilter) => void
}

export function Filters({ onFilter, onSelect }: Props) {
  return (
    <div className='flex items-center gap-2'>
      <Select onValueChange={onSelect}>
        <SelectTrigger>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='ALL'>All</SelectItem>
          <SelectItem value='ACTIVE'>Active</SelectItem>
          <SelectItem value='INACTIVE'>Inactive</SelectItem>
        </SelectContent>
      </Select>
      {/* <Button variant='dot'>
        <Filter
          size={14}
          className='text-foreground'
        />
      </Button> */}
      <SearchLink onSearch={onFilter} />
    </div>
  )
}
