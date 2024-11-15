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
            <h1>Connection</h1>
            <label htmlFor="username">User name</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="imput-compte"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChangePassword}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="imput-compte"
              required
            />
            <Link to={isAuth ? "/home" : "/"}>
              <button
                onClick={() => login(username, password)}
                type="submit"
                className="button-compte"
              >
                Connection
              </button>
            </Link>
          </form>
          <hr />
          <form onSubmit={handleRegisterSubmit} className="inputs-compte">
            <h1>Registration</h1>
            <label htmlFor="registerUsername">User name</label>
            <input
              onChange={handleRegisterUsernameChange}
              type="text"
              id="registerUsername"
              name="registerUsername"
              placeholder="User name"
              className="imput-compte"
              required
            />{" "}
            <label htmlFor="registerPassword">Password</label>
            <input
              onChange={handleRegisterPasswordChange}
              type="password"
              id="registerPassword"
              name="registerPassword"
              placeholder="Password"
              className="imput-compte"
              required
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              onChange={handleConfirmPasswordChange}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              className="imput-compte"
              required
            />
            <button type="submit" className="button-compte">
              Registration
            </button>
          </form>
        </div>
      </div>
      <div className="titre">
        <h2>Mixology Bar</h2>
      </div>
    </div>
  );
}

export default Compte;
