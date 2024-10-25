import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import PopularCocktailCarousel from "./components/PopularCocktailCarousel/PopularCocktailCarousel";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <PopularCocktailCarousel/>
      <Outlet />
    </>
  );
}

export default App;
