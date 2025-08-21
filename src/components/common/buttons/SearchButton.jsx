import { SearchIcon } from "../Icons";

const SearchButton = ({ canSearch, isPending }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          type="submit"
          disabled={!canSearch}
          className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg ${
            canSearch
              ? "bg-blue hover:bg-blue-hover text-white hover:shadow-xl hover:scale-105 active:scale-95"
              : "bg-blue text-white cursor-not-allowed"
          }`}
        >
          <SearchIcon className="mr-2" />
          {isPending ? "Searching..." : "Explore"}
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
