import { AlcoholFilter } from "./AlcoholFilter/AlcoholFilter";
import { IngredientFilter } from "./IngredientFilter/IngredientFilter";
import { NameSearch } from "./NameSearch/NameSearch";
import { Results } from "./Results";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-page">
      <h1 className="search-title">Mixology Bar Search</h1>
      <div className="search-filters">
        <NameSearch />
        <AlcoholFilter />
        <IngredientFilter />
      </div>
      <Results />
    </div>
  );
};

export default Search;
