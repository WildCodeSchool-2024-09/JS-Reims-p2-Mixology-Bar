import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Navbar";



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Nav />
      
    </>
  );
}

export default App;
