import React from "react";
import NextCleaning from "./components/nextCleaning/NextCleaning";
import ParticleData from "./components/particleData/ParticleData";
import NavBar from "./components/navBar/NavBar";
import ChartPPM from "./components/chartPPM/ChartPPM";
import Currentprogramming from "./components/currentProgramming/Currentprogramming";
import "./Home.Style.css";

interface Home {
  // Definir las propiedades del componente, si es necesario
}
const Home: React.FC<Home> = () => {
  return (
    <div className="wrapper-grid">
      <div id="item-0">
        <NavBar />
      </div>
      <div id="item-1">
        <NextCleaning />
      </div>
      <div id="item-2"><Currentprogramming/></div>
      <div id="item-3">
        <ParticleData />
      </div>
      <div id="item-4">
        <ChartPPM />
      </div>
      <div id="item-5">&nbsp;</div>
      <div id="item-6">&nbsp;</div>
    </div>
  );
};

export default Home;
