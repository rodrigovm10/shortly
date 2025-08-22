import { Hero } from '@/features/landing/components/hero'
import { Actions } from '@/features/landing/components/actions'

export default async function Home() {
  return (
    <main className='flex flex-col items-center gap-8'>
      <Hero />
      <Actions />
    </main>
  )
}
