import { useState } from "react";
import "./Navbar.scss";
import { AiOutlineRocket, AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <AiOutlineRocket color="#fff" size={35} />
        <p className="logo-text">
          Lucy.<span>com</span>
        </p>
      </div>
      <menu>
        <div
          className={showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"}
          onClick={hideMenu}
        ></div>
        <ul
          className="nav-links"
          id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}
        >
          <li onClick={hideMenu}>
            <a href="#">Home</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">Features</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">Download</a>
          </li>
          <li onClick={hideMenu}>
            <a href="#">Subscribe</a>
          </li>
          <li className="nav-btn" onClick={hideMenu}>
            <a className="btn btn-dark" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={27} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
