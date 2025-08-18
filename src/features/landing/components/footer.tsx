import Link from 'next/link'

export function Footer() {
  return (
    <footer className='w-full border-t bg-background py-6 flex items-center justify-center h-auto mt-8 sm:mt-0'>
      <div className='flex flex-col items-center justify-between gap-2 md:flex-row '>
        <span className='text-xs'>
          Made with ❤️ by{' '}
          <Link
            href='https://github.com/rodrigovm10'
            target='_blank'
            rel='noopener noreferrer'
          >
            Rodrigo
          </Link>
        </span>
      </div>
    </footer>
  )
}
