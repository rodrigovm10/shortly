'use client'

import { toast } from 'sonner'
import { useLinkStore } from '../../provider/link-provider'
import { useState, useTransition } from 'react'
import { deleteLink } from '../../actions/delete-link'

import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Loader, Trash } from 'lucide-react'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

interface Props {
  link: {
    id: string
    shortCode: string
  }
}

export function DeleteLink({ link }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const { deleteLink: deleteLinkStore } = useLinkStore(state => state)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(async () => {
      const formData = new FormData(e.currentTarget)
      const confirmation = formData.get('confirmation') as string

      if (confirmation !== link.shortCode) {
        const errorText = 'Short link does not match the short code.'
        setError(errorText)
        toast.error(errorText)
        return
      }

      const [error, success] = await deleteLink(link.id, link.shortCode)

      if (error) {
        toast.error(error)
        return
      }

      if (success) {
        toast.success(success, {
          description: `The link /${link.shortCode} has been deleted.`,
        })
        deleteLinkStore(link.id)
        setIsOpen(false)
      }
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <button className='cursor-pointer hover:opacity-70 transition-opacity'>
              <Trash size={14} />
            </button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete link</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to want to delete the link?</DialogTitle>
          <DialogDescription className='text-sm text-destructive'>
            Access to the link will be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
        >
          <Label>
            Type <span className='font-semibold'>{link.shortCode}</span> to confirm:
          </Label>
          <Input
            id='confirmation'
            name='confirmation'
            placeholder={link.shortCode}
            className={error ? 'border-destructive' : ''}
          />
          {error && <p className='text-destructive text-xs -mt-2 ml-1'>{error}</p>}

          <div className='w-full flex gap-2 flex-col sm:flex-row'>
            <Button
              type='submit'
              className='flex-1'
              disabled={isPending}
            >
              {isPending ? <Loader className='animate-spin' /> : <Trash size={14} />}
              <span>{isPending ? 'Deleting Link...' : 'Delete Link'}</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
