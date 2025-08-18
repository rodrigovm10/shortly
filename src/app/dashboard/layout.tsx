import { Header } from '@/features/dashboard/components/header'
import { Sidebar } from '@/features/dashboard/components/sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 p-3 overflow-auto'>{children}</main>
      </div>
    </div>
  )
}
