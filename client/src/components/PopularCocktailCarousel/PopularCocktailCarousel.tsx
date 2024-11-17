import { useEffect, useRef, useState } from "react";
import "./PopularCocktailCarousel.css";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import type { BasicCocktail, Cocktail } from "../../types/Cocktail";

const PopularCocktailCarousel = () => {
  const [popularCocktails, setPopularCocktails] = useState<Cocktail[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchPopularCocktails = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
        );
        const data = await response.json();
        const topCocktails: BasicCocktail[] = data.drinks.slice(0, 10);

        const detailedCocktails = await Promise.all(
          topCocktails.map(async (drink) => {
            const res = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`,
            );
            const details = await res.json();
            return details.drinks[0] as Cocktail;
          }),
        );

        setPopularCocktails(detailedCocktails);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    };

    fetchPopularCocktails();
  }, []);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) itemsRef.current[index] = el;
  };

  return (
    <section className="carousel">
      <div className="scroll-carousel" ref={containerRef}>
        <div className="carousel-track">
          {popularCocktails.map((cocktail, index) => (
            <div
              key={cocktail.idDrink}
              className="carousel-item"
              ref={(el) => setItemRef(el, index)}
            >
              <CocktailCard initialData={cocktail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCocktailCarousel;
