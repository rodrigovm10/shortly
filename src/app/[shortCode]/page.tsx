import { notFound, redirect } from 'next/navigation'
import { retrieveLinkByShortCode } from '@/features/links/actions/retrieve-links'
import { addClick } from '@/features/links/actions/add-click'

export default async function PagePage({ params }: { params: Promise<{ shortCode: string }> }) {
  const { shortCode } = await params

  const [error, result] = await retrieveLinkByShortCode(shortCode)
  const newClicks = result?.clicks ? result.clicks + 1 : 1
  await addClick(shortCode, newClicks)

  if (error) {
    notFound()
  }

  if (result) {
    redirect(result.original_url)
  }
}
