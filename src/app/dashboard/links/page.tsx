import { retrieveLinks } from '@/features/links/actions/retrieve-links'
import { LinkPageContent } from '@/features/links/components/link-page-content'

export default async function LinksPage() {
  const [error, links] = await retrieveLinks()

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  return (
    <section>
      <h1 className='text-2xl font-bold mb-4'>Links Page</h1>
      <p className='text-gray-600'>This is the links page of the dashboard.</p>
      <LinkPageContent initialLinks={links!} />
    </section>
  )
}
