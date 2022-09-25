import "./Header.scss";
import hamburgerIcon from "../../images/ham-menu.svg";
import closeMenuIcon from "../../images/ham-menu-close.svg";
import logo from "../../images/logo.jpg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="nav" id="navigation">
      <header className="nav__header">
        <section>
          <img src={logo} alt="profile" />
          <span className="nav__header__name">
            <HashLink smooth to="#home">
              Marcin Bugaj
            </HashLink>
          </span>
        </section>

        <div className="hamburger " onClick={handleShowMenu}>
          <img
            src={!showMenu ? hamburgerIcon : closeMenuIcon}
            alt="hamburger"
          />
        </div>
      </header>
      <section className="nav__links ">
        <ul className={showMenu ? "show" : ""}>
          <li onClick={() => setShowMenu(false)}>
            <HashLink smooth to="#home">
              Home
            </HashLink>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <HashLink smooth to="#projects">
              Projects
            </HashLink>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
