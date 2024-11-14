import "./Navbar.css";
import { Link } from "react-router-dom";
import favorite from "../../assets/images/Heart.png";
import home from "../../assets/images/Home.png";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";
import { useAuth } from "../../context/AuthContext";

function Nav() {
  const { isAuth } = useAuth();
  return (
    <>
      <nav>
        <Link to={isAuth ? "/home" : "/"}>
          <img src={home} alt="" />
        </Link>
        <Link to={isAuth ? "/search" : "/"}>
          <img src={search} alt="" />
        </Link>
        <Link to={isAuth ? "/favorites" : "/"}>
          <img src={favorite} alt="" />
        </Link>
        <Link to={isAuth ? "/compte" : "/"}>
          <img src={avatar} alt="" />
        </Link>
      </nav>
    </>
  );
}

export default Nav;
