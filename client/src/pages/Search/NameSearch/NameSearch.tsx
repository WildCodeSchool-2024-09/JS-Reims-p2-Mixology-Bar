import { useState } from "react";
import { useSearchContext } from "../../../context/SearchContext";
import "./NameSearch.css";

export const NameSearch = () => {
  const [query, setQuery] = useState("");
  const { fetchCocktails } = useSearchContext();

  const handleSearch = () => {
    fetchCocktails(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <input
        className="name-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by name or first letter"
      />
      <button type="button" className="searchbar-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
