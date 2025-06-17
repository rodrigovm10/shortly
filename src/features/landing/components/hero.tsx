import { TypographyH1, TypographyP } from '@/shared/components/typography'

export function Hero() {
  return (
    <section className='flex flex-col items-center px-6 pt-16 text-center '>
      <TypographyH1 className='mt-6 font-bold tracking-tight max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
        Transform Your
      </TypographyH1>
      <TypographyH1 className='mt-6 font-bold tracking-tight max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2 text-primary'>
        Link Management
      </TypographyH1>
      <TypographyP className='font-normal text-lg md:text-xl max-w-[75ch] text-gray-350'>
        Create, customize, and share short links effortlessly with our powerful URL shortener.
      </TypographyP>
    </section>
  )
}
