import Link from 'next/link'

interface Props {
  title: string
  redirectTo: string
  textRedirectTo: string
}

export function FormFooter({ title, redirectTo, textRedirectTo }: Props) {
  return (
    <p className='px-8 text-center text-sm text-muted-foreground'>
      {title}
      <Link
        href={redirectTo}
        className='hover:text-brand underline underline-offset-4'
      >
        {' '}
        {textRedirectTo}
      </Link>
    </p>
  )
}
