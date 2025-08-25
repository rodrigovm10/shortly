import { cn } from '@/shared/lib/utils'
import { Link } from '@/shared/types/database'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'

interface Props {
  link: Link
  className?: string
}

export function InfoLink({ link, className }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn('flex gap-2 items-start', className)}>
          <span className='text-xs'>{link.clicks} clicks</span>
          <ChartNoAxesColumnIncreasing size={14} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Stats</p>
      </TooltipContent>
    </Tooltip>
  )
}
