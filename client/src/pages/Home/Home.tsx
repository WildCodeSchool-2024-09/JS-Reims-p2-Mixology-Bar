import "../../App.css";
import PopularCocktailCarousel from "../../components/PopularCocktailCarousel/PopularCocktailCarousel";
import RandomCocktail from "../../components/RandomCocktail/RandomCocktail";

function Home() {
  return (
    <>
      <PopularCocktailCarousel />
      <RandomCocktail />
    </>
  );
}

export default Home;
