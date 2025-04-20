import { TypographyH2 } from '@/components/ui/typography-H1'

interface Props {
  title: string
  description: string
}

export function FormHeader({ title, description }: Props) {
  return (
    <section className='flex flex-col space-y-2 text-center mb-2'>
      <TypographyH2 className=' font-semibold tracking-tight '>{title}</TypographyH2>
      <p className='text-sm text-muted-foreground '>{description}</p>
    </section>
  )
}
