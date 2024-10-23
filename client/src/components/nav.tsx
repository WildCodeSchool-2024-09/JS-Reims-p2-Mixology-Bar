import "./nav.css";
import home from "../assets/images/Home.png";
import search from "../assets/images/search.png";
import create from "../assets/images/Plus square.png";
import favorite from "../assets/images/Heart.png";
import avatar from "../assets/images/Generic avatar (2).png";

function Nav() {
  return (
    <>
      <nav>
        <img src={home} alt="" />
        <img src={search} alt="" />
        <img src={create} alt="" />
        <img src={favorite} alt="" />
        <img src={avatar} alt="" />
      </nav>
    </>
  );
}

export default Nav;
