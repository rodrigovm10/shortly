import { retrieveLinks } from '../actions/retrieve-links'

import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import { ChartNoAxesColumnIncreasing, Copy, Settings, Trash } from 'lucide-react'
import { CopyLink } from './link-actions/copy-link'

export async function ListLinks() {
  const [error, links] = await retrieveLinks()

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {links &&
        links.map(link => (
          <Card key={link.id}>
            <CardContent className='flex justify-between '>
              <section className=''>
                <h3 className='font-bold'>
                  <span className='opacity-70'>/</span>
                  {link.short_code}
                </h3>
                <p>{link.original_url}</p>
              </section>
              <section className='flex gap-4 items-start'>
                <div className='flex gap-2 items-start'>
                  <span className='text-xs'>{link.clicks} clicks</span>
                  <ChartNoAxesColumnIncreasing size={14} />
                </div>
                <CopyLink link={link} />
                <Settings size={14} />
                <Trash size={14} />
              </section>
            </CardContent>
            <CardFooter className='flex justify-end'>
              <span className='text-xs text-muted-foreground font-semibold'>
                {new Date(link.created_at).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </CardFooter>
          </Card>
        ))}
    </section>
  )
}
