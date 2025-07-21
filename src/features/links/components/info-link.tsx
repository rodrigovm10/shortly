import { cn } from '@/shared/lib/utils'
import { Link } from '@/shared/types/database'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'

interface Props {
  link: Link
  className?: string
}

export function InfoLink({ link, className }: Props) {
  return (
    <div className={cn('flex gap-2 items-start', className)}>
      <span className='text-xs'>{link.clicks} clicks</span>
      <ChartNoAxesColumnIncreasing size={14} />
    </div>
  )
}
