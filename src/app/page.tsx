import Hero from '@/landing/components/hero'

export default async function Home() {
  return (
    <>
      <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
        <Hero />
      </section>
    </>
  )
}
