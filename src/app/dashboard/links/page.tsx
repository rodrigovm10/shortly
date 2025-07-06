import { CreateLink } from '@/features/links/components/create-link'
import { ListLinks } from '@/features/links/components/list-links'

export default function LinksPage() {
  return (
    <section>
      <h1>Links Page</h1>
      <p>This is the links page of the dashboard.</p>
      <CreateLink />
      <ListLinks />
    </section>
  )
}
