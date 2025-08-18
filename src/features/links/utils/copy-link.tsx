import { toast } from 'sonner'
import { Link } from '@/shared/types/database'

export const copyLink = (link: Link) => {
  const urlCopy = `${window.location.origin}/${link.short_code}`

  navigator.clipboard.writeText(urlCopy)
  toast.success('Link copied to clipboard!', {
    description: `Short link: ${urlCopy}`,
  })
}
