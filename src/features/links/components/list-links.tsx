import { CardLink } from './card-link'
import { Link } from '@/shared/types/database'

interface Props {
  links: Link[]
}

export function ListLinks({ links }: Props) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {links.length > 0 &&
        links.map(link => (
          <CardLink
            key={link.id}
            link={link}
          />
        ))}
    </section>
  )
}
