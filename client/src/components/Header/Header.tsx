import "./Header.css";
import { Link } from "react-router-dom";
import fav from "../../assets/images/Heart-desk.png";
import home from "../../assets/images/Home.png";
import compte from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { isAuth } = useAuth();
  return (
    <>
      <header>
        <Link to={isAuth ? "/home" : "/home"}>
          <img src={home} alt="" />
        </Link>
        <Link to={isAuth ? "/search" : "/search"}>
          <img src={search} alt="" />
        </Link>
        <h1>Mixology Bar</h1>
        <Link to={isAuth ? "/favorites" : "/favorites"}>
          <img src={fav} alt="" />
        </Link>
        <Link to={isAuth ? "/compte" : "/compte"}>
          <img src={compte} alt="" />
        </Link>
      </header>
    </>
  );
}

export default Header;
