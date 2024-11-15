import { useEffect, useState, useCallback } from "react";
import "./Favorite.css";
import { getFavCocktail } from "../../Data/getFavCocktail";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

function Fav() {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  const fetchFavorites = useCallback(async () => {
    const arrayId = JSON.parse(localStorage.getItem("Cocktail") || "[]").filter(
      (id: string | null) => id !== null && id !== "",
    );

    if (arrayId.length === 0) {
      setFavorites([]);
      return;
    }

    const drinks = await getFavCocktail(arrayId);
    setFavorites(drinks);
  }, []);

  const handleFavoriteToggle = () => {
    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className="fav-titre">
      <h1>My favorite cocktails</h1>
      {favorites.length === 0 ? (
        <p>No favorite cocktail</p>
      ) : (
        <div className="display-favorite">
          {favorites.map((cocktail) => (
            <CocktailCard
              key={cocktail.idDrink}
              initialData={cocktail}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Fav;
