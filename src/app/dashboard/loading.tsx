import { Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'

export default function Loading() {
  return (
    <div className='space-y-6'>
      <div className='fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='relative'>
            <Loader2 className='h-8 w-8 animate-spin text-primary' />
            <div className='absolute inset-0 rounded-full border-2 border-primary/20 animate-ping' />
          </div>
          <div className='text-center space-y-2'>
            <p className='text-sm font-medium'>Loading your dashboard...</p>
            <p className='text-xs text-muted-foreground'>This won't take long</p>
          </div>
        </div>
      </div>
    </div>
  )
}
