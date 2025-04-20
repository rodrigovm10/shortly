'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TypographyH1, TypographyP } from '@/components/ui/typography-H1'
import { Copy, Link2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Hero() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      toast.error('Please enter a URL', { description: 'You need to provide a URL to shorten' })
      return
    }

    setIsLoading(true)

    try {
      const shortCode = Math.random().toString(36).substring(2, 8)
      const baseUrl = window.location.origin

      setShortUrl(`${baseUrl}/${shortCode}`)

      toast.success('URL shortened successfully!', {
        description: 'You short link is ready to use',
      })
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Failed to shorten URL. Please try again.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl)
    toast('Copied to clipboard', {
      description: 'The short URL has been copied to your clipboard',
    })
  }

  return (
    <div className='flex flex-col items-center gap-6 text-center '>
      <div className='rounded-full bg-primary/10 p-3'>
        <Link2 className='h-12 w-12 text-primary' />
      </div>
      <TypographyH1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
        Shorten, Share, Track
      </TypographyH1>
      <TypographyP className='max-w-[500px] text-lg text-muted-foreground duration-700 animate-in fade-in-5 slide-in-from-top-2'>
        Create short, memorable links in seconds.{' '}
        <span className='bg-primary text-white px-1'>Track clicks</span> and analyze your audience
        with our powerful dashboard.
      </TypographyP>

      <section className='w-full max-w-xs sm:max-w-md space-y-4'>
        <form
          className='flex flex-col gap-4 duration-700 animate-in fade-in-10 slide-in-from-bottom-10'
          onSubmit={handleSubmit}
        >
          <div className='flex w-full items-center gap-2'>
            <Input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder='Enter your long URL'
              className='flex-1/2'
            />
            <Button
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? 'Shortening...' : 'Shorten'}
            </Button>
          </div>
        </form>
        {shortUrl && (
          <div className='mt-4 flex items-center gap-2 rounded-md border bg-muted p-1'>
            <span className='flex-1 truncate text-sm'>{shortUrl}</span>
            <Button
              onClick={copyToClipboard}
              size='sm'
              variant='ghost'
              type='button'
            >
              <Copy className='size-4' />
            </Button>
          </div>
        )}
        <TypographyP className='text-sm text-muted-foreground'>
          No account required.{' '}
          <Link
            href='/signup'
            className='underline font-bold text-black underline-offset-4'
          >
            Sign up
          </Link>{' '}
          for analytics and link managment
        </TypographyP>
      </section>
    </div>
  )
}
