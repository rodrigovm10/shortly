import { Link2 } from 'lucide-react'

interface Props {
  size?: number
}

export function Logo({ size = 14 }: Props) {
  return (
    <div className='bg-primary text-black p-2 rounded-xl'>
      <Link2
        className='text-white dark:text-black group-hover:-rotate-45 transition-transform duration-300'
        size={size}
      />
    </div>
  )
}
