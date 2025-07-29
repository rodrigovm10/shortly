'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { Link } from '@/shared/types/database'
import { useState, useTransition } from 'react'
import { editLink } from '../../actions/edit-link'
import { zodResolver } from '@hookform/resolvers/zod'
import { editLinkSchema, EditLinkSchema } from '../../schema/edit-link'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'

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
import { Loader, Rocket, Settings } from 'lucide-react'
import { Textarea } from '@/shared/components/ui/textarea'

interface Props {
  link: Link
}

export function EditLink({ link }: Props) {
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<EditLinkSchema>({
    resolver: zodResolver(editLinkSchema),
    defaultValues: {
      shortLink: link.short_code ?? '',
      originalUrl: link.original_url ?? '',
      description: link.description ?? '',
    },
  })

  function onSubmit(values: EditLinkSchema) {
    startTransition(async () => {
      const [error, success] = await editLink(values, link.id)

      if (error) {
        toast.error(error)
        return
      }

      if (success) {
        toast.success(success)
      }

      form.reset()
      setIsOpen(false)
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger
        asChild
        className='cursor-pointer'
      >
        <Settings size={14} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit a Link</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8'
          >
            <FormField
              control={form.control}
              name='originalUrl'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>Destination URL:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='https://'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='shortLink'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>Destination URL:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='my link'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>Description (optional):</FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none'
                      placeholder='Enter a description'
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
                {isPending ? <Loader className='animate-spin' /> : <Rocket />}
                <span>{isPending ? 'Editing Link...' : 'Edit Link'}</span>
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
