import React from "react";
import "./Home.Style.css";
import NextCleaning from "./components/nextCleaning/NextCleaning";
import ParticleData from "./components/particleData/ParticleData";

const GridComponent: React.FC = () => {
  return (
    <div className="angry-grid">
      <div id="item-0">&nbsp;</div>
      <div id="item-1">
        <NextCleaning />
      </div>
      <div id="item-2">&nbsp;</div>
      <div id="item-3">
        <ParticleData />
      </div>
      <div id="item-4">&nbsp;</div>
      <div id="item-5">&nbsp;</div>
      <div id="item-6">&nbsp;</div>
    </div>
  );
};

export default GridComponent;
