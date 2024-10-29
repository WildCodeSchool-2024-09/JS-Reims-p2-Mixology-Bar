import "./Search.css";

function Search() {
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
          <div className="filtre-1">
            <button type="button">Alcoolisés</button>
          </div>

          <div className="filtre-2">
            <button type="button">Non alcoolisés</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
