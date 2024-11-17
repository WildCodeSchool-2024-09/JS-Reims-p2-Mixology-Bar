import { useCallback, useEffect, useState } from "react";
import "./RandomCocktail.css";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import type { Cocktail } from "../../types/Cocktail";

const RandomCocktail = () => {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomCocktail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cocktail details:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomCocktail();
  }, [fetchRandomCocktail]);

  if (loading) {
    return <p>Fetching a random cocktail... 🔃</p>;
  }

  if (!cocktail) {
    return <p>No cocktail found</p>;
  }

  return (
    <div className="random-container">
      <CocktailCard key={cocktail.idDrink} initialData={cocktail} />
      <button className="btnrandom" type="button" onClick={fetchRandomCocktail}>
        🎲
      </button>
    </div>
  );
};

export default RandomCocktail;
