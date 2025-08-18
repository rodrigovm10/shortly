'use client'

import { Copy } from 'lucide-react'
import { Link } from '@/shared/types/database'
import { copyLink } from '../../utils/copy-link'

interface Props {
  link: Link
}

export function CopyLink({ link }: Props) {
  const handleCopy = () => {
    copyLink(link)
  }

  return (
    <button
      onClick={handleCopy}
      className='cursor-pointer hover:opacity-70 transition-opacity'
    >
      <Copy size={14} />
    </button>
  )
}
