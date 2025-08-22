import { ShortenerCard } from './shortener-card'

export function CallToAction() {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-8 rounded-lg shadow-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-8 gap-8 bg-card '>
      <ShortenerCard />
    </section>
  )
}
