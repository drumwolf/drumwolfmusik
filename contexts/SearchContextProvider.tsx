'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SearchContextValue {
  query: string
  setQuery: (query: string) => void
  debouncedQuery: string
}

const SearchContext = createContext<SearchContextValue>({
  query: '',
  setQuery: () => {},
  debouncedQuery: '',
})

export const useSearch = () => useContext(SearchContext)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <SearchContext.Provider value={{ query, setQuery, debouncedQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
