import { TypographyH4, TypographyP } from '@/shared/components/typography'
import { Button } from '@/shared/components/ui/button'

export function MoreFeatures() {
  return (
    <section className=''>
      <div className='text-center'>
        <TypographyH4 className='text-lg lg:text-xl'>Want more powerful features?</TypographyH4>
        <TypographyP className='text-sm text-primary'>
          Create an account to unlock password protection, detailed analytics, and advanced link
          managment tools.
        </TypographyP>
      </div>
      <div className='flex flex-col sm:items-center sm:justify-center gap-2 mt-4 sm:flex-row'>
        <Button variant='outline'>Sign In</Button>
        <Button>Create Free Account</Button>
      </div>
    </section>
  )
}
