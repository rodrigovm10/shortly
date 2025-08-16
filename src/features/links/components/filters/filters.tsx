import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { StatusFilter } from '../link-page-content'
import { SearchLink } from '@/features/links/components/filters/search-link'

interface Props {
  onSearch: (search: string) => void
  onSelect: (status: StatusFilter) => void
}

export function Filters({ onSearch, onSelect }: Props) {
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
      <SearchLink onSearch={onSearch} />
    </div>
  )
}
