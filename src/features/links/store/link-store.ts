import { createStore } from 'zustand/vanilla'
import { Link } from '@/shared/types/database'
import { EditLinkSchema } from '../schema/edit-link'
import { StatusFilter } from '../components/link-page-content'

export type LinkState = {
  links: Link[]
  search: string
  status: StatusFilter
}

export type LinkActions = {
  createLink: (link: Partial<Link>) => void
  deleteLink: (id: string) => void
  updateLink: (id: string, link: EditLinkSchema) => void
  setSearch: (search: string) => void
  setStatus: (status: StatusFilter) => void
  getFilteredLinks: () => Link[]
}

export type LinkStore = LinkState & LinkActions

export const defaultInitState: LinkState = {
  links: [],
  search: '',
  status: 'ALL',
}

export const createLinkStore = (initState: LinkState = defaultInitState) => {
  return createStore<LinkStore>()((set, get) => ({
    ...initState,
    createLink: (link: Partial<Link>) => {
      set(state => ({
        links: [...state.links, link as Link],
      }))
    },
    deleteLink: (id: string) => {
      set(state => ({
        links: state.links.filter(link => link.id !== id),
      }))
    },
    updateLink: (id: string, link: EditLinkSchema) => {
      set(state => ({
        links: state.links.map(item => {
          const { description, originalUrl } = link

          if (item.id === id) {
            return {
              ...item,
              description: description ?? null,
              original_url: originalUrl,
            }
          }
          return item
        }),
      }))
    },
    setSearch: (search: string) => set({ search }),

    setStatus: (status: StatusFilter) => set({ status }),

    getFilteredLinks: () => {
      const { links, search, status } = get()

      return links.filter(link => {
        const matchSearch =
          search === '' ||
          link.short_code?.toLowerCase().includes(search.toLowerCase()) ||
          link.original_url?.toLowerCase().includes(search.toLowerCase())

        const matchStatus = status === 'ALL' || link.status === status

        return matchSearch && matchStatus
      })
    },
  }))
}
