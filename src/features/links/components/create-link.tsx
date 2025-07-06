'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateLinkSchema, createLinkSchema } from '../schema/link'

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
import { Loader, Plus, Rocket } from 'lucide-react'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { useState, useTransition } from 'react'
import { createLink } from '../actions/create-link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function CreateLink() {
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const form = useForm<CreateLinkSchema>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: {
      shortLink: '',
      originalUrl: '',
      description: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: CreateLinkSchema) {
    startTransition(async () => {
      const [error, success] = await createLink(values)

      if (error) toast.error(error)
      if (success) toast.success(success)

      form.reset()
      setIsOpen(false)

      router.refresh()
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger>
        <Button>
          <Plus />
          <span>Create Link</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Link</DialogTitle>
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
                <span>{isPending ? 'Creating Link...' : 'Create Link'}</span>
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
