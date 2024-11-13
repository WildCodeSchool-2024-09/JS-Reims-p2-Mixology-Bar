import { AlcoholFilter } from "./AlcoholFilter/AlcoholFilter";
import { NameSearch } from "./NameSearch/NameSearch";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-page">
      <h1 className="search-title">Mixology Bar Search</h1>
      <div className="search-filters">
        <NameSearch />
        <AlcoholFilter />
      </div>
    </div>
  );
};

export default Search;
