import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CocktailDetails.css";
import fav from "../../assets/images/fav-icon.png";
import share from "../../assets/images/share.png";
import instagram from "../../assets/images/insta.png";
import facebook from "../../assets/images/fb-icon.png";
import twitter from "../../assets/images/twitter.png";

export interface CocktailDetails {
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  cocktail: string;
  index: string;
  [key: string]: string | null;
}

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<CocktailDetails>();
  const [showSocials, setShowSocials] = useState(false);
  const socialNetworks = [instagram, facebook, twitter];

  const handleToggleSocials = () => {
    setShowSocials(!showSocials);
  };

  const addToFavorites = (idDrink?: string) => {
    console.log(idDrink)

    const array=[]
    array.push(idDrink) 
    console.log(array)

    localStorage.setItem("Cocktail",JSON.stringify(array));
  };

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
        <div className="img-btn">
          <img
            className="cktl-img"
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />
          <div className="btn-text">
            <div className="btn-container">
              <button type="button" onClick={handleToggleSocials}>
                <img className="share" src={share} alt="share" />
              </button>
              <div className="btn-icone">
                {showSocials &&
                  socialNetworks.map((network) => {
                    return (
                      <img
                        src={network}
                        key={id}
                        className="icones-social"
                        alt="reseaux"
                      />
                    );
                  })}
              </div>
              <button
                type="button"
                onClick={() => addToFavorites(id)}
              >
                <img src={fav} alt="fav" className="fav-icone" />
              </button>
            </div>
          </div>
        </div>
        <div className="ckt-ingr">
          <h3>Ingrédients</h3>
          <ul>
            {Object.keys(cocktail)
              .filter((key) => key.startsWith("strIngredient") && cocktail[key])
              .map((key, index) => (
                <li key={key}>
                  {cocktail[key]} {cocktail[`strMeasure${index + 1}`] || ""}
                </li>
              ))}
          </ul>
          <h3>Description</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
