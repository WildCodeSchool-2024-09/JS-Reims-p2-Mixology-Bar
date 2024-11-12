import { useState } from "react";
import "./AlcoholFilter.css";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export const AlcoholFilter = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCocktailsByType = async (type: "Alcoholic" | "Non_Alcoholic") => {
    try {
      setError(null);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`,
      );
      const data = await response.json();

      if (data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
        setError("Aucun cocktail trouvé pour ce filtre.");
      }
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des cocktails.",
      );
      console.error(error);
    }
  };

  return (
    <div className="alcohol-filter-container">
      <div className="alcohol-button-container">
        <button
          type="button"
          className="alcohol-button"
          onClick={() => fetchCocktailsByType("Alcoholic")}
        >
          Alcoolisé
        </button>
        <button
          type="button"
          className="alcohol-button"
          onClick={() => fetchCocktailsByType("Non_Alcoholic")}
        >
          Non Alcoolisé
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="cocktail-results">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
