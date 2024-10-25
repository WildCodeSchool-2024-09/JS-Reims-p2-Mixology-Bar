import "./Navbar.css";
import favorite from "../../assets/images/Heart.png";
import home from "../../assets/images/Home.png";
import avatar from "../../assets/images/avatar.png";
import search from "../../assets/images/search.png";

function Nav() {
  return (
    <>
      <nav>
        <img src={home} alt="" />
        <img src={search} alt="" />
        <img src={favorite} alt="" />
        <img src={avatar} alt="" />
      </nav>
    </>
  );
}

export default Nav;
