import React from "react";
import "./ParticleData.Style.css";

interface ParticleData {
  // Definir las propiedades del componente, si es necesario
}

const ParticleData: React.FC<ParticleData> = () => {
  // Resto del código del componente

  return (
    <div className="wrapper-particle-data">
      <h1 className="tittle">Datos de particulas -- Panel cuarto</h1>
      <div className="wrapper-data-sensors ">
        <span>Sensor uno --{`>`} 150ppm</span>
        <span>Sensor dos --{`>`} 150ppm</span>{" "}
        <span>Sensor tres --{`>`} 150ppm</span>
      </div>
      <hr />
      <span className="average">Promedio --{`>`} 150ppm</span>
      <hr />
      <div className="action-buttons">
        <button className="button-cleaner">Ejecutar Limpieza</button>
        <div className="wrapper-sensors">
          <span className="span-sensor-selected">1</span>
          <span className="span-sensor-normal">2</span>
          <span className="span-sensor-normal">3</span>
        </div>
      </div>
    </div>
  );
};

export default ParticleData;
