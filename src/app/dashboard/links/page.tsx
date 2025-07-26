import { ListLinks } from '@/features/links/components/list-links'
import { CreateLink } from '@/features/links/components/create-link'

export default function LinksPage() {
  return (
    <section className=''>
      <h1 className='text-2xl font-bold mb-4'>Links Page</h1>
      <p className='text-gray-600'>This is the links page of the dashboard.</p>

      <CreateLink />
      <ListLinks />
    </section>
  )
}
