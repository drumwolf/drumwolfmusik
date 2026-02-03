import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

const Search = () => {
  return (
    <ButtonGroup>
      <Input id="input-button-group"  className="bg-white focus-visible:ring-0" placeholder="Type to search..." />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  )
}

export default Search