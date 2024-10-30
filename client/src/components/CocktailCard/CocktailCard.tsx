import { useEffect, useState } from "react";
import "./CocktailCard.css";

interface Cocktail {
  strDrinkThumb: string;
  strDrink: string;
  strInstructions: string;
}

interface CocktailCardProps {
  cocktailId: string;
}

const CocktailCard = ({ cocktailId }: CocktailCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cocktailDetails, setCocktailDetails] = useState<Cocktail | null>(null);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`,
        );
        const data = await response.json();
        setCocktailDetails(data.drinks[0]);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du cocktail :",
          error,
        );
      }
    };

    fetchCocktailDetails();
  }, [cocktailId]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!cocktailDetails) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="cocktail-card-container">
      <div className="cocktail-card">
        <img
          src={cocktailDetails.strDrinkThumb}
          alt={cocktailDetails.strDrink}
          className="cocktail-image"
        />
        <div className="cocktail-content">
          <div className="cocktail-info">
            <h2>{cocktailDetails.strDrink}</h2>
            <p>{cocktailDetails.strInstructions}</p>
          </div>
          <button
            type="button"
            className={`favorite-button ${isFavorite ? "favorited" : ""}`}
            onClick={toggleFavorite}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
