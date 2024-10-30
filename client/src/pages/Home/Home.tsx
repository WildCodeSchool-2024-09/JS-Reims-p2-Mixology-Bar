import "../../App.css";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import PopularCocktailCarousel from "../../components/PopularCocktailCarousel/PopularCocktailCarousel";
import RandomCocktail from "../../components/RandomCocktail/RandomCocktail";

function Home() {
  return (
    <>
      <PopularCocktailCarousel />
      <RandomCocktail />
      <CocktailCard cocktailId="11007" />
      <CocktailCard cocktailId="11008" />
    </>
  );
}
export default Home;
