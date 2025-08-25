import { toast } from 'sonner'
import { Link } from '@/shared/types/database'
import { EnvConfig } from '@/shared/config/envs'

export const copyLink = (link: Link) => {
  const urlCopy = `${EnvConfig().NEXT_PUBLIC_APP_URL}/${link.short_code}`

  navigator.clipboard.writeText(urlCopy)
  toast.success('Link copied to clipboard!', {
    description: `Short link: ${urlCopy}`,
  })
}
