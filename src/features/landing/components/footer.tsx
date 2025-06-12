import { Logo } from '@/shared/components/logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='w-full border-t bg-background py-6 flex items-center justify-center h-auto'>
      <div className='flex flex-col items-center justify-between gap-2 md:flex-row '>
        <Logo size={12} />
        <span className='text-xs'>© 2025 Canal Ético. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
