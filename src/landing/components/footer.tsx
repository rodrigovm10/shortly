import Link from 'next/link'

export function Footer() {
  return (
    <footer className='fixed bottom-0 flex justify-center w-full mb-4'>
      <Link
        href='https://x.com/rodrigo_vm19'
        className='transition-all duration-300 hover:underline text-sm'
        target='_blank'
      >
        🚀 Made by @rodrigovm10
      </Link>
    </footer>
  )
}
