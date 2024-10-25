import { Outlet } from "react-router-dom";
import "./App.css";
import PopularCocktailCarousel from "./components/PopularCocktailCarousel/PopularCocktailCarousel";
import Header from "./components/header";
import Nav from "./components/nav";

import RandomCocktail from "./components/RandomCocktail";

function App() {
  return (
    <>
      <Header />
      <RandomCocktail />
      <Nav />
      <PopularCocktailCarousel />
      <Outlet />
    </>
  );
}

export default App;
