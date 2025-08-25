'use client'

import { useStore } from 'zustand'
import { Link } from '@/shared/types/database'
import { createContext, useContext, useRef } from 'react'
import { type LinkStore, createLinkStore } from '../store/link-store'

export type LinkStoreApi = ReturnType<typeof createLinkStore>

export const LinkStoreContext = createContext<LinkStoreApi | undefined>(undefined)

export interface LinkStoreProviderProps {
  children: React.ReactNode
  links: Link[]
}

export const LinkStoreProvider = ({ children, links }: LinkStoreProviderProps) => {
  const storeRef = useRef<LinkStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createLinkStore({ links, search: '', status: 'ALL' })
  }

  return <LinkStoreContext.Provider value={storeRef.current}>{children}</LinkStoreContext.Provider>
}

export const useLinkStore = <T,>(selector: (store: LinkStore) => T): T => {
  const linkStoreContext = useContext(LinkStoreContext)

  if (!linkStoreContext) {
    throw new Error('useLinkStore must be used within a LinkStoreProvider')
  }

  return useStore(linkStoreContext, selector)
}
