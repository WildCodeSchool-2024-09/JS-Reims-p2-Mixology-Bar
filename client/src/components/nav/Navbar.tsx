import "./Navbar.css";
import { Link } from "react-router-dom";
import favorite from "../../assets/images/Heart.png";
import home from "../../assets/images/Home.png";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";

function Nav() {
  return (
    <>
      <nav>
        <Link to={"/home"}>
          <img src={home} alt="" />
        </Link>
        <Link to={"/search"}>
          <img src={search} alt="" />
        </Link>
        <Link to={"/favorites"}>
          <img src={favorite} alt="" />
        </Link>
        <Link to={"/compte"}>
          <img src={avatar} alt="" />
        </Link>
      </nav>
    </>
  );
}

export default Nav;
