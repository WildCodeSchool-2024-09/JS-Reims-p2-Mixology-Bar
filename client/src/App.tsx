import { Outlet } from "react-router-dom";
import "./App.css";
import PopularCocktailCarousel from "./components/PopularCocktailCarousel/PopularCocktailCarousel";
import Header from "./components/header";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <PopularCocktailCarousel />
      <Outlet />
    </>
  );
}

export default App;
