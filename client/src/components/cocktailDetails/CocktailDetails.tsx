import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CocktailDetails.css";
import fav from "../../assets/images/fav-icon.png";
import share from "../../assets/images/share.png";

interface CocktailDetails {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: string | null;
}

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<CocktailDetails>();

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        if (!response.ok) {
          throw new Error("Erreur de réseau");
        }
        const data = await response.json();
        setCocktail(data.drinks[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchCocktail();
  }, [id]);

  if (!cocktail) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="ckt-detail-container">
      <h2 className="cktl-name"> {cocktail.strDrink}</h2>
      <div className="header-card-container">
        <img
          className="cktl-img"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div className="btn-container">
          <button type="button" className="btn-shortcut">
            <img src={fav} alt="fav" className="icon-shortcut" />
          </button>
          <button type="button" className="btn-shortcut">
            <img src={share} alt="share" className="icon-shortcut" />
          </button>
        </div>
      </div>

      <h3>Ingrédients</h3>
      <div className="ingr">
        <ul>
          {Object.keys(cocktail)
            .filter((key) => key.startsWith("strIngredient") && cocktail[key])
            .map((key, index) => (
              <li key={key}>
                {cocktail[key]} {cocktail[`strMeasure${index + 1}`] || ""}
              </li>
            ))}
        </ul>
      </div>

      <h3>Description</h3>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
