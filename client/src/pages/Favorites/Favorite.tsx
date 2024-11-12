import { useEffect, useState } from "react";
import "./Favorite.css";
import { getFavCocktail } from "../../Data/getFavCocktail";
import type { CocktailDetails } from "../../components/cocktailDetails/CocktailDetails";

function Favorites() {
  const [favorites, setFavorites] = useState<CocktailDetails[]>();

  useEffect(() => {
    const fetchFavCocktail = async () => {
      const arrayId = JSON.parse(localStorage.getItem("Cocktail") || "{}");

      const data = await getFavCocktail(arrayId);
      setFavorites(data);
    };

    fetchFavCocktail();
  }, []);

  return (
    <div className="fav-titre">
      <h1>Mes Cocktails Favoris</h1>
      {favorites?.length === 0 ? (
        <p>Aucun favori pour le moment</p>
      ) : (
        <ul>
          {favorites?.map((cocktail) => (
            <li key={cocktail.id}>{cocktail.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Favorites;
