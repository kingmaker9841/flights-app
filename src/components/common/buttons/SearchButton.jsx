import { SearchIcon } from "../Icons";
import { useSearchContext } from "../../../context/SearchContext";
import Button from "../../ui/button/Button";

const SearchButton = ({ isPending }) => {
  const { canSearch } = useSearchContext();
  
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Button
          type="submit"
          disabled={!canSearch}
          loading={isPending}
          icon={<SearchIcon />}
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          {isPending ? "Searching..." : "Explore"}
        </Button>
      </div>
    </div>
  );
};

export default SearchButton;
