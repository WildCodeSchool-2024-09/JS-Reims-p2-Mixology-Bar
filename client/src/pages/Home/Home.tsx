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
      setCocktails(response.drinks.slice(0, 20));
    });
  }, []);

  const cocktailsList = cocktails.map((cocktail) => (
    <CocktailCard key={cocktail.idDrink} cocktailId={cocktail.idDrink} />
  ));
  return (
    <>
      <div className="cocktail-list">
        <div className="cocktail-item">{cocktailsList}</div>
      </div>
      <PopularCocktailCarousel />
      <RandomCocktail />
    </>
  );
}

export default Home;
