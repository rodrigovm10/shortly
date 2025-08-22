'use client'

import { toast } from 'sonner'
import { Rocket } from 'lucide-react'
import { useTransition, useState } from 'react'
import { EnvConfig } from '@/shared/config/envs'

import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'

export function ShortenerCard() {
  const [isShorting, startTransition] = useTransition()
  const [shortUrl, setShortUrl] = useState<string | null>(null)

  const generateShortUrl = async () => {
    const shortCode = Math.random().toString(36).substring(2, 15)
    const shortUrl = `${EnvConfig().NEXT_PUBLIC_APP_URL}/${shortCode}`
    setShortUrl(shortUrl)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const url = formData.get('url') as string

    if (!url) {
      toast.error('Please enter a URL to shorten.')
      return
    }
    startTransition(() => {
      setTimeout(() => {
        generateShortUrl()
      }, 3000) // Simulate a network request
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
      {shortUrl && (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm text-muted-foreground'>{shortUrl}</p>
        </div>
      )}
    </section>
  )
}
