import { useEffect, useState } from "react";
import "./CocktailCard.css";
import { Link } from "react-router-dom";
import type { Cocktail } from "../../types/Cocktail";

interface CocktailCardProps {
  cocktailId?: string;
  initialData?: Cocktail;
}

const CocktailCard = ({ cocktailId, initialData }: CocktailCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cocktailDetails, setCocktailDetails] = useState<Cocktail | null>(
    initialData || null,
  );

  useEffect(() => {
    if (!cocktailDetails && cocktailId) {
      const fetchCocktailDetails = async () => {
        try {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`,
          );
          const data = await response.json();
          setCocktailDetails(data?.drinks[0]);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des détails du cocktail :",
            error,
          );
        }
      };

      fetchCocktailDetails();
    }
  }, [cocktailId, cocktailDetails]);

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
          </div>
          <div className="carousel-button">
            <Link to={`/cocktail/${cocktailDetails.idDrink}`}>Pick</Link>
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
