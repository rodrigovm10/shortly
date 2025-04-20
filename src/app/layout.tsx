import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shortly | Simplify Your Links with Our URL Shortener',
  description:
    'Manage and track your shortened URLs easily with Shortly. A powerful and user-friendly URL shortener tool for individuals and businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex min-h-screen flex-col'>
          <Navbar />
          <main className='mx-auto'>{children}</main>
          <Toaster richColors />
        </div>
      </body>
    </html>
  )
}
