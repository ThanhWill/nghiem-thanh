'use client'

import { createContext, useContext } from 'react'

interface BookContextValue {
  current: number
  navigate: (page: number) => void
  total: number
}

export const BookContext = createContext<BookContextValue>({
  current: 0,
  navigate: () => {},
  total: 0,
})

export function useBook() {
  return useContext(BookContext)
}
