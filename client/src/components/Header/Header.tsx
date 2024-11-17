import "./Header.css";
import { Link } from "react-router-dom";
import fav from "../../assets/images/Heart-desk.png";
import home from "../../assets/images/Home.png";
import compte from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";

function Header() {
  return (
    <>
      <header>
        <Link to={"/home"}>
          <img src={home} alt="" />
        </Link>
        <Link to={"/search"}>
          <img src={search} alt="" />
        </Link>
        <h1>Mixology Bar</h1>
        <Link to={"/favorites"}>
          <img src={fav} alt="" />
        </Link>
        <Link to={"/compte"}>
          <img src={compte} alt="" />
        </Link>
      </header>
    </>
  );
}

export default Header;
