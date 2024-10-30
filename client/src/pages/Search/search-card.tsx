import { Link } from "react-router-dom";

function SearchCard() {
  return (
    <>
      <div className="all">
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
            <Link to="alcool">
              {" "}
              <button type="button">Alcoolisés</button>
            </Link>
          </div>

          <div className="filtre">
            <Link to="non-alcool">
              {" "}
              <button type="button">Non alcoolisés</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
