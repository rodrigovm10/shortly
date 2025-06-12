import { Hero } from '@/features/landing/components/hero'
import { ShortenerCard } from '@/features/landing/components/shortener-card'

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-8'>
      <Hero />
      <ShortenerCard />
    </main>
  )
}
