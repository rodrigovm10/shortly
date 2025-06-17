import { Footer } from '@/features/landing/components/footer'
import { Header } from '@/features/landing/components/header'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='grid min-h-dvh grid-rows-[auto_1fr_auto]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
