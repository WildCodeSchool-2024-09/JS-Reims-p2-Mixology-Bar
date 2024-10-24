import CocktailCard from "../../components/CocktailCard/CocktailCard";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="cocktails">
        <CocktailCard cocktailId={11007} />
        <CocktailCard cocktailId={11008} />
        <CocktailCard cocktailId={11009} />
        <CocktailCard cocktailId={11010} />
      </div>
    </>
  );
}

export default Home;
