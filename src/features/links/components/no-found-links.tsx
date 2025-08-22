import { Stars } from 'lucide-react'
import { CreateLink } from './create-link'

export function NoFoundLinks() {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4'>
      <Stars size={40} />
      <p className='  '>No links found.</p>
      <CreateLink
        variant={{ variant: 'outline' }}
        text='Create a new link'
      />
    </div>
  )
}
