import { Metadata } from 'next'
import { retrieveLinks } from '@/features/links/actions/retrieve-links'
import { TitleDescription } from '@/shared/components/title-description'
import { LinkStoreProvider } from '@/features/links/provider/link-provider'
import { LinkPageContent } from '@/features/links/components/link-page-content'

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
        <TitleDescription
          title='Links Page'
          description='This is the links page of the dashboard.'
        />
        <LinkPageContent />
      </LinkStoreProvider>
    </section>
  )
}
