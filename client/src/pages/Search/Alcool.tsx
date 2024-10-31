import "./Search.css";

function Alcool() {
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
          <div className="filtre-choix-2">Acidulé</div>

          <div className="filtre-choix-2">Amer</div>

          <div className="filtre-choix-2">Corsé</div>

          <div className="filtre-choix-2">Crémeux</div>

          <div className="filtre-choix-2">Epicé</div>

          <div className="filtre-choix-2">Fruité</div>

          <div className="filtre-choix-2">Pétillant</div>

          <div className="filtre-choix-2">Salé</div>
        </div>
      </div>
    </>
  );
}

export default Alcool;
