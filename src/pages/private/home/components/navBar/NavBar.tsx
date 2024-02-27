import React from "react";
import Logo from "../../../../../assets/pre-sun-tech-logo.png"
import "./NavBar.Style.css"

interface NavBar {
  // Definir las propiedades del componente, si es necesario
}

const NavBar: React.FC<NavBar> = () => {
  // Resto del código del componente

  return (
    <div className="wrapper-navbar">
        <img src={Logo} className="logo-navbar"/>
     
    </div>
  );
};

export default NavBar;
