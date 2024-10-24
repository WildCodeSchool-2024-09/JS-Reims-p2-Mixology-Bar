import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Outlet />
    </>
  );
}

export default App;
