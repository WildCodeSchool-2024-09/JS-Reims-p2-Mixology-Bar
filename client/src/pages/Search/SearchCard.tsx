import { Link } from "react-router-dom";

function SearchCard() {
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          id="rechercher"
          name="rechercher"
          placeholder="rechercher"
          className="imput"
        />
      </div>
      <div className="h3">
        <h3>Recherche par filtres :</h3>
      </div>
      <div className="filtres">
        <div className="filtre">
          <Link to="alcool"> Alcoolisés</Link>
        </div>

        <div className="filtre">
          <Link to="non-alcool"> Non alcoolisés</Link>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
