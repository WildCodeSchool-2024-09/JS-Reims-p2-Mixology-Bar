import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import CocktailCard from "./components/CocktailCard/CocktailCard";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <div className="App">
        <CocktailCard cocktailId="11007" />
      </div>
    </>
  );
}

export default App;
