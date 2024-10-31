import { useCallback, useEffect, useState } from "react";
import "./RandomCocktail.css";
interface RandomCocktail {
  strDrink: string;
  strDrinkThumb: string;
}

const RandomCocktail = () => {
  const [cocktail, setCocktail] = useState<RandomCocktail>();
  const [loading, setLoading] = useState(true);

  const fetchRandomCocktail = useCallback(async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du cocktail:",
        error,
      );
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomCocktail();
  }, [fetchRandomCocktail]);

  if (loading) {
    return <p>rechargement en cours 🔃</p>;
  }

  if (!cocktail) {
    return <p>pas de cocktail trouvé 🗿</p>;
  }

  return (
    <div className="random-container">
      <div className="randomCard">
        <h3 className="cktname">{cocktail.strDrink}</h3>
        <img
          className="imgCkt"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
      </div>

      <button className="btnrandom" type="button" onClick={fetchRandomCocktail}>
        🎲
      </button>
    </div>
  );
};

export default RandomCocktail;
