'use client'

import { Copy } from 'lucide-react'
import { Link } from '@/shared/types/database'
import { copyLink } from '../../utils/copy-link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

interface Props {
  link: Link
}

export function CopyLink({ link }: Props) {
  const handleCopy = () => {
    copyLink(link)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleCopy}
          className='cursor-pointer hover:opacity-70 transition-opacity'
        >
          <Copy size={14} />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy link</p>
      </TooltipContent>
    </Tooltip>
  )
}
