import "./Compte.css";
import { type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Compte() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login, isAuth } = useAuth();

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleRegisterUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setRegisterUsername(event.target.value);
  }

  function handleRegisterPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setRegisterPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  function handleLoginSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (username && password) {
      login(username, password);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  function handleRegisterSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (registerUsername && registerPassword && confirmPassword) {
      if (registerPassword === confirmPassword) {
      } else {
        alert("Les mots de passe ne correspondent pas.");
      }
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  return (
    <div className="img">
      <div className="desktop-compte">
        <div className="compte">
          <form onSubmit={handleLoginSubmit} className="inputs-compte">
            <h1>Connexion</h1>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              id="username"
              name="username"
              placeholder="Nom/pseudonyme"
              className="imput-compte"
              required
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              onChange={handleChangePassword}
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className="imput-compte"
              required
            />
            <Link to={isAuth ? "/home" : "/"}>
              <button
                onClick={() => login(username, password)}
                type="submit"
                className="button-compte"
              >
                Connexion
              </button>
            </Link>
          </form>
          <hr />
          <form onSubmit={handleRegisterSubmit} className="inputs-compte">
            <h1>Inscription</h1>
            <label htmlFor="registerUsername">Nom d'utilisateur</label>
            <input
              onChange={handleRegisterUsernameChange}
              type="text"
              id="registerUsername"
              name="registerUsername"
              placeholder="Nom/pseudonyme"
              className="imput-compte"
              required
            />
            <label htmlFor="registerPassword">Mot de passe</label>
            <input
              onChange={handleRegisterPasswordChange}
              type="password"
              id="registerPassword"
              name="registerPassword"
              placeholder="Mot de passe"
              className="imput-compte"
              required
            />
            <label htmlFor="confirmPassword">Confirmation mot de passe</label>
            <input
              onChange={handleConfirmPasswordChange}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              className="imput-compte"
              required
            />
            <button type="submit" className="button-compte">
              Inscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Compte;
