import { createStore } from 'zustand/vanilla'
import { Link } from '@/shared/types/database'
import { EditLinkSchema } from '../schema/edit-link'
import { StatusFilter } from '../components/link-page-content'

export type LinkState = {
  links: Link[]
}

export type LinkActions = {
  createLink: (link: Partial<Link>) => void
  deleteLink: (id: string) => void
  updateLink: (id: string, link: EditLinkSchema) => void
  searchLink: (search: string) => void
  selectLink: (status: StatusFilter) => void
}

export type LinkStore = LinkState & LinkActions

export const defaultInitState: LinkState = {
  links: [],
}

export const createLinkStore = (initState: LinkState = defaultInitState) => {
  return createStore<LinkStore>()(set => ({
    ...initState,
    createLink: (link: Partial<Link>) => {
      set(state => ({ links: [...state.links, link as Link] }))
    },
    deleteLink: (id: string) => {
      set(state => ({ links: state.links.filter(link => link.id !== id) }))
    },
    updateLink: (id: string, link: EditLinkSchema) => {
      set(state => ({
        links: state.links.map(item => {
          const { description, originalUrl, shortLink } = link

          if (item.id === id) {
            return {
              ...item,
              description: description ?? null,
              original_url: originalUrl,
              short_code: shortLink,
            }
          }
          return item
        }),
      }))
    },
    searchLink: (search: string) => {
      set(state => ({
        links: state.links.filter(link =>
          link.short_code?.toLowerCase().includes(search.toLowerCase())
        ),
      }))
    },
    selectLink: (status: StatusFilter) => {
      if (status === 'ALL') {
        set(state => ({
          links: state.links,
        }))
        return
      }

      set(state => ({
        links: state.links.filter(link => link.status === status),
      }))
    },
  }))
}
