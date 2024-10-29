import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../../components/Header/Header";

import Nav from "../../components/nav/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Nav />
    </div>
  );
}

export default App;
