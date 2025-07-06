'use client'

import { toast } from 'sonner'
import { Copy } from 'lucide-react'
interface Props {
  link: {
    short_code: string
    original_url: string
  }
}

export function CopyLink({ link }: Props) {
  const handleCopy = () => {
    const urlCopy = `${window.location.origin}/${link.short_code}`

    navigator.clipboard.writeText(urlCopy)
    toast.success('Link copied to clipboard!', {
      description: `Short link: ${urlCopy}`,
    })
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
