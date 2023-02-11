import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Coin",
      path: "/coin",
    },
  ];
  return (
    <header>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <Link to="/">
              <img src={Logo} alt="" />
              <span>Crypto</span>
            </Link>
          </div>
          <ul className="nav__list">
            {links?.map((link) => (
              <li key={link?.id} className="nav__list__link">
                <Link to={link?.path}>{link?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
