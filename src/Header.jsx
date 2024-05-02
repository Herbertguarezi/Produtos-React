import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/produto");
  }, []);

  return (
    <nav className="HeaderNav">
      <NavLink to={"produto"} className="HeaderNavLink">
        Produto
      </NavLink>
      <NavLink to={"contato"} className="HeaderNavLink">
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
