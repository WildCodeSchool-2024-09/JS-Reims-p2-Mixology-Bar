import { useState } from "react";
import "./NameSearch.css";
import CocktailCard from "../../../components/CocktailCard/CocktailCard";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export const NameSearch = () => {
  const [query, setQuery] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      } else {
        setCocktails([]);
        setError("Aucun cocktail trouvé pour cette recherche.");
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des cocktails.",
      );
      console.error(error);
    }
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

      {error && <p className="error-message">{error}</p>}

      <div className="cocktail-results">
        {cocktails.map((cocktail) => (
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
  );
};
