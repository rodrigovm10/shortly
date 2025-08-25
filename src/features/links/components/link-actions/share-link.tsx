'use client'

import { toast } from 'sonner'
import { Share2 } from 'lucide-react'
import { Link } from '@/shared/types/database'
import { EnvConfig } from '@/shared/config/envs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

interface Props {
  link: Link
}

export function ShareLink({ link }: Props) {
  const shareLink = () => {
    const url = `${EnvConfig().NEXT_PUBLIC_APP_URL}/${link.short_code}`

    if (navigator.share) {
      navigator.share({ title: 'Hey, check this out!', text: 'Check this out!', url })
    } else {
      navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!', {
        description: `Short link: ${url}`,
      })
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className='cursor-pointer hover:opacity-70 transition-opacity '
          onClick={shareLink}
        >
          <Share2 size={14} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Share link</p>
      </TooltipContent>
    </Tooltip>
  )
}
