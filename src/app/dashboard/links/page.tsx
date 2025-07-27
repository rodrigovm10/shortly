import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'
import { Input } from '@/shared/components/ui/input'
import { Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { Button } from '@/shared/components/ui/button'

export default function LinksPage() {
  return (
    <section className=''>
      <h1 className='text-2xl font-bold mb-4'>Links Page</h1>
      <p className='text-gray-600'>This is the links page of the dashboard.</p>
      <section className='flex items-center justify-between gap-2 mb-4'>
        <div className='flex items-center gap-2'>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='active'>Active</SelectItem>
              <SelectItem value='inactive'>Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button variant='dot'>
            <Filter
              size={14}
              className='text-foreground'
            />
          </Button>
          <Input placeholder='Search links' />
        </div>
        <CreateLink />
      </section>
      <ListLinks />
    </section>
  )
}
