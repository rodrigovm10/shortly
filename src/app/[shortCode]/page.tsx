import { retrieveLinkByShortCode } from '@/features/links/actions/retrieve-links'
import { notFound, redirect } from 'next/navigation'
export default async function PagePage({ params }: { params: Promise<{ shortCode: string }> }) {
  const { shortCode } = await params

  const [error, result] = await retrieveLinkByShortCode(shortCode)

  console.log(shortCode)

  if (error) {
    notFound()
  }

  if (result) {
    redirect(result.original_url)
  }
}
