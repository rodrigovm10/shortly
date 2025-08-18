import { Link } from '@/shared/types/database'
import { copyLink } from '../utils/copy-link'

interface Props {
  link: Link
}

export function CopyLinkShortCode({ link }: Props) {
  return (
    <h3
      className='font-bold font-mono tracking-wider cursor-pointer'
      onClick={() => copyLink(link)}
    >
      <span className='opacity-70 font-mono'>/</span>
      {link.short_code}
    </h3>
  )
}
