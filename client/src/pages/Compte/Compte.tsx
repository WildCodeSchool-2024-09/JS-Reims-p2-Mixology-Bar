import "./Compte.css";
import { type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Compte() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuth } = useAuth();

  function handlechangeName(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setUsername(value);
  }
  function handlechangePassword(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setPassword(value);
  }

  return (
    <>
      <div className="img">
        <div className="desktop-compte">
          <div className="compte">
            <h1>Connexion</h1>

            <div className="inputs-compte">
              <p>nom d'utilisateur</p>
              <input
                onChange={handlechangeName}
                type="text"
                id="nom-utilisateur"
                name="nom-utilisateur"
                placeholder="nom"
                className="imput-compte"
              />
              <p>mot de passe</p>
              <input
                onChange={handlechangePassword}
                type="password"
                id="mot-de-passe"
                name="mot-de-passe"
                placeholder="......"
                className="imput-compte"
              />
              <Link to={isAuth ? "/home" : "/"}>
                <button
                  onClick={() => login(username, password)}
                  type="button"
                  className="button-compte"
                >
                  connexion
                </button>
              </Link>
            </div>
            <hr />
            <h1>Inscription</h1>

            <div className="inputs-compte">
              <p>nom d'utilisateur</p>
              <input
                type="text"
                id="nom-utilisateur-inscr"
                name="nom-utilisateur-inscr"
                placeholder="nom"
                className="imput-compte"
              />
              <p>mot de passe</p>
              <input
                type="text"
                id="mot-de-passe-inscr"
                name="mot-de-passe-inscr"
                placeholder="......"
                className="imput-compte"
              />
              <p>confirmation mot de passe</p>
              <input
                type="text"
                id="confirm-mot-de-passe-inscr"
                name="confirm-mot-de-passe-inscr"
                placeholder="......"
                className="imput-compte"
              />
              <button type="button" className="button-compte">
                inscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compte;
