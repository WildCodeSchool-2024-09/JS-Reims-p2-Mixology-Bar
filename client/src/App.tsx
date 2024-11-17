import { Outlet } from "react-router-dom";
import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="all">
        <AuthProvider>
          {location.pathname !== "/" && <Header />}
          <Outlet />
          <Nav />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
