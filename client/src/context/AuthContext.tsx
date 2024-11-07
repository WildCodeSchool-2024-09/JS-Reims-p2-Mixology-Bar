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
    if (username === "Paul") {
      if (password === "Paul") {
        setIsAuth(true);
      }
    }
    if (username !== "Paul") {
      if (password !== "Paul") {
        alert("mauvais mot de passe ou mauvais nom d'utilisateur");
      }
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
