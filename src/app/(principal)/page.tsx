import { createClient } from '@/db/supabase/server'
import { Hero } from '@/features/landing/components/hero'
import { ShortenerCard } from '@/features/landing/components/shortener-card'

export default async function Home() {
  const supabase = await createClient()
  const session = await supabase.auth.getUser()

  console.log({ session })

  return (
    <main className='flex flex-col items-center gap-8'>
      <Hero />
      <ShortenerCard />
    </main>
  )
}
