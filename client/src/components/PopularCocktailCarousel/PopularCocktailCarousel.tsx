import React, { useEffect, useState } from "react";
import "./PopularCocktailCarousel.css";

const PopularCocktailCarousel = () => {
  const [popularCocktails, setPopularCocktails] = useState([]);

  useEffect(() => {
    const fetchPopularCocktails = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
        );
        const data = await response.json();
        const topCocktails = data.drinks.slice(0, 10);

        const detailedCocktails = await Promise.all(
          topCocktails.map(async (drink) => {
            const res = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`,
            );
            const details = await res.json();
            return details.drinks[0];
          }),
        );

        setPopularCocktails(detailedCocktails);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    };

    fetchPopularCocktails();
  }, []);

  return (
    <section className="carousel">
      <div className="scroll-carousel">
        <div className="carousel-track">
          {popularCocktails.map((cocktail, index) => (
            <div key={cocktail.idDrink} className="carousel-item">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h3>{cocktail.strDrink}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCocktailCarousel;
