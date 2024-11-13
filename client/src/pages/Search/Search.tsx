import { useState } from "react";
import "./Search.css";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
};

export const Search = () => {
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"All" | "Alcoholic" | "Non_Alcoholic">(
    "All",
  );

  const handleSearch = async () => {
    setError(null);
    try {
      let url = "";
      if (query.length === 1) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`;
      } else if (query.length > 1) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      } else {
        setError("Veuillez entrer au moins une lettre pour la recherche.");
        return;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.drinks) {
        setCocktails(data.drinks);
        applyFilter(data.drinks, filter);
      } else {
        setCocktails([]);
        setFilteredCocktails([]);
        setError("Aucun cocktail trouvé pour cette recherche.");
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des cocktails.",
      );
      console.error(error);
    }
  };

  const applyFilter = (
    cocktails: Cocktail[],
    filter: "All" | "Alcoholic" | "Non_Alcoholic",
  ) => {
    if (filter === "All") {
      setFilteredCocktails(cocktails);
    } else {
      const filtered = cocktails.filter((cocktail) =>
        filter === "Alcoholic"
          ? cocktail.strAlcoholic === "Alcoholic"
          : cocktail.strAlcoholic === "Non_Alcoholic",
      );
      setFilteredCocktails(filtered);
    }
  };

  const handleFilterChange = (
    newFilter: "All" | "Alcoholic" | "Non_Alcoholic",
  ) => {
    setFilter(newFilter);
    applyFilter(cocktails, newFilter);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="searchbar-container">
        <input
          className="name-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search by name or first letter"
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="alcohol-filter-container">
        <button
          type="button"
          className="alcohol-button"
          onClick={() => handleFilterChange("All")}
        >
          <p>All</p>
        </button>
        <button
          type="button"
          className="alcohol-button"
          onClick={() => handleFilterChange("Alcoholic")}
        >
          <p>Alcoholic</p>
        </button>
        <button
          type="button"
          className="alcohol-button"
          onClick={() => handleFilterChange("Non_Alcoholic")}
        >
          <p>Non Alcoholic</p>
        </button>
      </div>
      <div className="scroll-container">
        <div className="scroll-in-scroll">
          <div className="cocktail-results">
            {filteredCocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                initialData={{
                  idDrink: cocktail.idDrink,
                  strDrink: cocktail.strDrink,
                  strDrinkThumb: cocktail.strDrinkThumb,
                  strInstructions: "",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
