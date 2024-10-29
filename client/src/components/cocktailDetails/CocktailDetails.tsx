import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CocktailDetails.css";

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
    <div>
      <h1>{cocktail.strDrink}</h1>
      <img
        className="cktSize"
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
      <h2>Ingrédients</h2>
      <ul>
        {Object.keys(cocktail)
          .filter((key) => key.startsWith("strIngredient") && cocktail[key])
          .map((key, index) => (
            <li key={key}>
              {cocktail[key]} {cocktail[`strMeasure${index + 1}`] || ""}
            </li>
          ))}
      </ul>
      <h2>Description</h2>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
