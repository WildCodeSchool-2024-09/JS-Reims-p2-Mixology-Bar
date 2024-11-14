import { useEffect, useState } from "react";
import "./Favorite.css";
import { getFavCocktail } from "../../Data/getFavCocktail";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

interface ApiResponse {
  drinks: Drink[];
}

function Fav() {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchFavCocktail = async () => {
      const arrayId = JSON.parse(localStorage.getItem("Cocktail") || "[]");
      const data: ApiResponse[] = await getFavCocktail(arrayId);
      const drinks = data[0].drinks;
      if (drinks) {
        setFavorites(drinks);
      }
    };

    fetchFavCocktail();
  }, []);

  return (
    <div className="fav-titre">
      <h1>Mes Cocktails Favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun favori pour le moment</p>
      ) : (
        <ul className="display-favorite">
          {favorites.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <h3 className="cktl-name">{cocktail.strDrink}</h3>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                className="cktl-img"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fav;
