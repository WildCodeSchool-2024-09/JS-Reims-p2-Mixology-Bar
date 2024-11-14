import { useState, useEffect, useCallback } from "react";
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
        setFilteredCocktails(data.drinks);
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

  const fetchAllCocktails = useCallback(async () => {
    setError(null);
    try {
      const alcoholicResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
      );
      const nonAlcoholicResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      );

      const alcoholicData = await alcoholicResponse.json();
      const nonAlcoholicData = await nonAlcoholicResponse.json();

      const allCocktails = [
        ...(alcoholicData.drinks || []),
        ...(nonAlcoholicData.drinks || []),
      ];

      setCocktails(allCocktails);
      setFilteredCocktails(allCocktails);
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des cocktails.",
      );
      console.error(error);
    }
  }, []);

  const fetchCocktailsByType = async (type: "Alcoholic" | "Non_Alcoholic") => {
    setError(null);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`,
      );
      const data = await response.json();

      if (data.drinks) {
        setFilteredCocktails(data.drinks);
      } else {
        setFilteredCocktails([]);
        setError("Aucun cocktail trouvé pour ce filtre.");
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des cocktails.",
      );
      console.error(error);
    }
  };

  const handleFilterChange = (
    newFilter: "All" | "Alcoholic" | "Non_Alcoholic",
  ) => {
    setFilter(newFilter);

    if (newFilter === "All") {
      setFilteredCocktails(cocktails);
    } else {
      fetchCocktailsByType(newFilter);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchAllCocktails();
  }, [fetchAllCocktails]);

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
          className={`alcohol-button ${filter === "All" ? "active" : ""}`}
          onClick={() => handleFilterChange("All")}
        >
          <p>All</p>
        </button>
        <button
          type="button"
          className={`alcohol-button ${filter === "Alcoholic" ? "active" : ""}`}
          onClick={() => handleFilterChange("Alcoholic")}
        >
          <p>Alcoholic</p>
        </button>
        <button
          type="button"
          className={`alcohol-button ${filter === "Non_Alcoholic" ? "active" : ""}`}
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
