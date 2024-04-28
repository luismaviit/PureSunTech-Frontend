import React from "react";
import Logo from "../../../../../assets/pre-sun-tech-logo.png";
import { useNavigate } from "react-router-dom";
import "./NavBar.Style.css";

interface NavBar {
  // Definir las propiedades del componente, si es necesario
}

const NavBar: React.FC<NavBar> = () => {
  
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="wrapper-navbar">
      <img src={Logo} className="logo-navbar" />
      <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default NavBar;
