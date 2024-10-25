import { Outlet } from "react-router-dom";
import "./App.css";
import PopularCocktailCarousel from "./components/PopularCocktailCarousel/PopularCocktailCarousel";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Navbar";

import RandomCocktail from "./components/RandomCocktail";

function App() {
  return (
    <>
      <Header />
      <PopularCocktailCarousel />
      <RandomCocktail />
      <Nav />
      
      <Outlet />
    </>
  );
}

export default App;
