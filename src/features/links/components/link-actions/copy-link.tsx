'use client'

import { toast } from 'sonner'
import { Copy } from 'lucide-react'
import { Database } from '@/shared/types/supabase'

type Link = Database['public']['Tables']['urls']['Row']

interface Props {
  link: Link
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
