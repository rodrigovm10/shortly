'use client'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Rocket } from 'lucide-react'
import { useTransition } from 'react'

export function ShortenerCard() {
  const [isShorting, startTransition] = useTransition()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const url = formData.get('url') as string
    startTransition(() => {
      console.log('Shortening URL...')
      setTimeout(() => {
        if (!url) {
          alert('Please enter a URL to shorten.')
          return
        }
      }) // Simulate a network request
    })
  }

  return (
    <section className='flex flex-col items-center justify-center '>
      <section className='text-center mb-6'>
        <h2 className='text-xl font-bold mb-2'>Shorten your URL instantly.</h2>
      </section>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col sm:flex-row gap-4 '
      >
        <Input
          id='url'
          name='url'
          placeholder='https://example.com/very-long-url'
        />
        <Button
          type='submit'
          disabled={isShorting}
        >
          {isShorting ? 'Shorting...' : 'Shorten'} <Rocket />
        </Button>
      </form>
    </section>
  )
}
