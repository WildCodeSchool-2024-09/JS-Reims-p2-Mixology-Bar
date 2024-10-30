import "./Search.css";

function NonAlcool() {
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
        <div className="filtres-alcool">
          <div className="filtre-choix-2">
            <button type="button">Acidulé</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Amer</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Corsé</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Crémeux</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Epicé</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Fruité</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Pétillant</button>
          </div>

          <div className="filtre-choix-2">
            <button type="button">Salé</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NonAlcool;
