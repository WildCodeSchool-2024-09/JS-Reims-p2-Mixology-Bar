import "./Home.css";
import { useEffect, useState } from "react";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import PopularCocktailCarousel from "../../components/PopularCocktailCarousel/PopularCocktailCarousel";
import RandomCocktail from "../../components/RandomCocktail/RandomCocktail";

interface CocktailAPIResponse {
  strDrinkThumb: string;
  strDrink: string;
  idDrink: string;
}

const fetchCocktails = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
    );
    return response.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des détails du cocktail :",
      error,
    );
  }
};

function Home() {
  const [cocktails, setCocktails] = useState<Array<CocktailAPIResponse>>([]);
  useEffect(() => {
    fetchCocktails().then((response) => {
      setCocktails(response.drinks.slice(0, 10));
    });
  }, []);

  const cocktailsList = cocktails.map((cocktail) => (
    <CocktailCard key={cocktail.idDrink} cocktailId={cocktail.idDrink} />
  ));
  return (
    <>
      <div className="home-caroussel-container">
        <div className="home-caroussel">
          <div className="article-caroussel">
            <div className="cocktail-article-container">
              <div className="cocktail-list">{cocktailsList}</div>
            </div>
            <div className="carousel-title">
              <h2 className="tendance">Trends</h2>
              <p>
                Here is a selection of cocktails <p>most viewed on our site</p>
              </p>
            </div>
            <PopularCocktailCarousel />
          </div>
          <div className="article-carousel-2">
            <div className="article-caroussel">
              <div className="random-title">
                <h2>Lacking inspiration?</h2>
                <p>
                  Click on the button
                  <p>and a cocktail will appear randomly!</p>
                </p>
              </div>
              <RandomCocktail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
