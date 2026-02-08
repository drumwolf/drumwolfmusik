'use client'

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { useSearch } from "@/contexts/SearchContextProvider"

const Search = () => {
  const { query, setQuery } = useSearch()

  return (
    <ButtonGroup>
      <Input
        id="input-button-group"
        className="bg-white focus-visible:ring-0"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}

export default Search
