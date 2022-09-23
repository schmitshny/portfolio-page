import "./Header.scss";
import hamburgerIcon from "../../images/ham-menu.svg";
import closeMenuIcon from "../../images/ham-menu-close.svg";
import logo from "../../images/logo.jpg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="nav">
      <header className="nav__header">
        <section>
          <img src={logo} alt="profile" />
          <span className="nav__header__name">Marcin Bugaj</span>
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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
