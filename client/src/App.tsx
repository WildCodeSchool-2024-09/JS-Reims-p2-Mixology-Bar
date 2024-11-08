import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <div className="all">
        <AuthProvider>
          <Header />
          <Outlet />
          <Nav />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
