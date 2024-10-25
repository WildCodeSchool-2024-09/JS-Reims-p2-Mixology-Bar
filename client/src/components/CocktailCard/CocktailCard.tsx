import React, { useState, useEffect } from "react";
import "./CocktailCard.css";

const CocktailCard = ({ cocktailId }) => {
  const [cocktail, setCocktail] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`,
        );
        const data = await response.json();
        setCocktail(data.drinks[0]);
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

  if (!cocktail) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="cocktail-card-container">
      <div className="cocktail-card">
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          className="cocktail-image"
        />
        <div className="cocktail-content">
          <div className="cocktail-info">
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
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
