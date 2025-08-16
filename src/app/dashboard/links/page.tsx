import { Metadata } from 'next'
import { LinkPageContent } from '@/features/links/components/link-page-content'
import { LinkStoreProvider } from '@/features/links/provider/link-provider'
import { retrieveLinks } from '@/features/links/actions/retrieve-links'

export const metadata: Metadata = {
  title: 'Shortly - Dashboard',
  description: 'Dashboard for the links',
}

export default async function LinksPage() {
  const [error, links] = await retrieveLinks()

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  return (
    <section>
      <LinkStoreProvider links={links!}>
        <h1 className='text-2xl font-bold mb-4'>Links Page</h1>
        <p className='text-gray-600'>This is the links page of the dashboard.</p>
        <LinkPageContent />
      </LinkStoreProvider>
    </section>
  )
}
