'use client'

import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Loader, Trash } from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { deleteLink } from '../../actions/delete-link'

interface Props {
  link: {
    id: string
    shortCode: string
  }
}

export function DeleteLink({ link }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(async () => {
      const formData = new FormData(e.currentTarget)
      const confirmation = formData.get('confirmation') as string
      console.log('Confirmation:', confirmation)

      if (confirmation !== link.shortCode) {
        toast.error('Short link does not match the short code.')
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
        setIsOpen(false)
      }
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger className='cursor-pointer'>
        <Trash size={14} />
      </DialogTrigger>
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
          />

          <div className='w-full flex gap-2 flex-col sm:flex-row'>
            <Button
              className='flex-1'
              variant='outline'
              disabled={isPending}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Cancel
            </Button>
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
