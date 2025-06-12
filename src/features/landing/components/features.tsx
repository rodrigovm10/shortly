import { ChartColumn, Shield, Zap } from 'lucide-react'

export function Features() {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center gap-8'>
      <div className='flex flex-col items-center'>
        <Zap />
        <p>Lightning Fast</p>
      </div>
      <div>
        <Shield />
        <p>Secure & Reliable</p>
      </div>
      <div>
        <ChartColumn />
        <p>Detailed Analytics</p>
      </div>
    </section>
  )
}
