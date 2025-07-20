import { retrieveLinks } from '../actions/retrieve-links'
import { CardLink } from './card-link'

export async function ListLinks() {
  const [error, links] = await retrieveLinks()

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {links &&
        links.map(link => (
          <CardLink
            key={link.id}
            link={link}
          />
        ))}
    </section>
  )
}
