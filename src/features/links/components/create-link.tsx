'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

import {
  Form,
  FormControl,
  FormDescription,
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
import { Plus, Rocket } from 'lucide-react'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

export function CreateLink() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Dialog>
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
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='shadcn'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
        <form className='space-y-6'>
          <section className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label className='font-semibold'>Destination URL:</Label>
              <Input placeholder='https://' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-semibold'>Short link:</Label>
              <Input placeholder='my link' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-semibold'>Description (optional):</Label>
              <Input placeholder='Enter a description' />
            </div>
          </section>
          <div className='w-full flex gap-2'>
            <Button
              className='flex-1'
              variant='outline'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='flex-1'
            >
              <Rocket />
              <span>Create Link</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
