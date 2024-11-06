import "./Compte.css";

function Compte() {
  return (
    <>
      <div className="desktop-compte">
        <div className="compte">
          <h1>Connexion</h1>

          <div className="inputs-compte">
            <p>nom d'utilisateur</p>
            <input
              type="text"
              id="nom d'utilisateur"
              name="nom d'utilisateur"
              placeholder="nom"
              className="imput-compte"
            />
            <p>mot de passe</p>
            <input
              type="text"
              id="mot de passe"
              name="mot de passe"
              placeholder="......"
              className="imput-compte"
            />
            <button type="button" className="button-compte">
              connexion
            </button>
          </div>
          <hr />
          <h1>Inscription</h1>

          <div className="inputs-compte">
            <p>nom d'utilisateur</p>
            <input
              type="text"
              id="nom d'utilisateur"
              name="nom d'utilisateur"
              placeholder="nom"
              className="imput-compte"
            />
            <p>mot de passe</p>
            <input
              type="text"
              id="mot de passe"
              name="mot de passe"
              placeholder="......"
              className="imput-compte"
            />
            <p>confirmation mot de passe</p>
            <input
              type="text"
              id="mot de passe"
              name="mot de passe"
              placeholder="......"
              className="imput-compte"
            />
            <button type="button" className="button-compte">
              inscription
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compte;
