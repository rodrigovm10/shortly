import { Footer } from '@/features/landing/components/footer'
import { Header } from '@/features/landing/components/header'
import { buttonVariants } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='grid min-h-dvh grid-rows-[auto_1fr_auto]'>
      <Header />
      <section className='flex flex-col items-center text-center gap-4 justify-start pt-10'>
        <span className='font-mono font-bold text-6xl'>404</span>
        <h2 className='text-4xl font-semibold'>Page not found</h2>
        <p>The page you're looking for doesn't exists.</p>
        <Link
          href='/'
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <Home size={14} />
          <span>Return Home</span>
        </Link>
      </section>
      <Footer />
    </main>
  )
}
