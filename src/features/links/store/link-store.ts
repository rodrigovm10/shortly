import { createStore } from 'zustand/vanilla'
import { Link } from '@/shared/types/database'

export type LinkState = {
  links: Link[]
}

export type LinkActions = {
  createLink: (link: Partial<Link>) => void
  deleteLink: (id: string) => void
  updateLink: (id: string, link: Partial<Link>) => void
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
    updateLink: (id: string, link: Partial<Link>) => {
      set(state => ({
        links: state.links.map(linkItem => {
          console.log(link)
          if (linkItem.id === id) {
            return { ...linkItem, ...link }
          }
          return linkItem
        }),
      }))
    },
  }))
}
