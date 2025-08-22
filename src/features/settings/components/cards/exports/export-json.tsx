'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'
import { Download, Loader } from 'lucide-react'
import { Label } from '@/shared/components/ui/label'
import { Button } from '@/shared/components/ui/button'
import { retrieveLinks } from '@/features/links/actions/retrieve-links'

export function ExportJSON() {
  const [isPending, startTransition] = useTransition()

  const exportLinks = async () => {
    const [error, links] = await retrieveLinks()

    if (error) {
      toast.error(error)
      return
    }

    if (!links) {
      toast.error('No links found to export')
      return
    }

    const blob = new Blob([JSON.stringify(links, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'my-links.json'
    link.click()
    URL.revokeObjectURL(url)
    toast.success('Links exported successfully!')
  }

  const handleExport = () => {
    startTransition(async () => {
      await exportLinks()
    })
  }

  return (
    <>
      <Label className='font-semibold text-md'>Export JSON:</Label>
      <Button
        variant='default'
        onClick={handleExport}
        className='mt-2'
        disabled={isPending}
      >
        {isPending ? <Loader className='animate-spin' /> : <Download />}
        <span>{isPending ? 'Exporting...' : 'Export all links'}</span>
      </Button>
    </>
  )
}
