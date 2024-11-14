import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface MyContextProps {
  children: ReactNode;
}
type AuthContext = {
  isAuth: boolean;
  login: (x: string, s: string) => void;
  logout: () => void;
} | null;

const AuthContext = createContext<AuthContext>(null);

export function AuthProvider({ children }: MyContextProps) {
  const [isAuth, setIsAuth] = useState(false);

  function login(username: string, password: string) {
    if (username === "Paul" && password === "Paul") {
      setIsAuth(true);
    } else {
      alert(
        "Le nom d'utilisateur/utilisatrice ou le mot de passe est incorrect. Veuillez réessayer.",
      );
    }
  }

  function logout() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (value == null) {
    throw new Error("useAuth has to be used within <AuthProvider>");
  }

  return value;
};
