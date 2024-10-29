import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PopularCocktailCarousel from "./components/PopularCocktailCarousel/PopularCocktailCarousel";
import RandomCocktail from "./components/RandomCocktail/RandomCocktail";
import Nav from "./components/nav/Navbar";

function App() {
  return (
    <>
      <Header />
      <PopularCocktailCarousel />
      <Outlet />
      <RandomCocktail />
      <Nav />
    </>
  );
}

export default App;
