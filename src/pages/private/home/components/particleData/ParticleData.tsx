import React from "react";
import "./ParticleData.Style.css";

interface ParticleData {
  // Definir las propiedades del componente, si es necesario
}

const ParticleData: React.FC<ParticleData> = () => {
  // Resto del código del componente

  return (
    <div className="wrapperParticleData">
      <h1 className="tittle">Datos de particulas -- Panel cuarto</h1>
      <div className="wrapper-sensor">
        <span className="timer">Sensor uno --{`>`} 150ppm</span>
        <span className="timer">Sensor dos --{`>`} 150ppm</span>{" "}
        <span className="timer">Sensor tres --{`>`} 150ppm</span>
      </div>
      <hr />
      <span className="average">Promedio--{`>`} 150ppm</span>
      <hr />
      <button className="button-cleaner">Ejecutar Limpieza</button>
      <div className="wrapper-sensors">
        <span className="span-sensor-selected">1</span>
        <span className="span-sensor-normal">2</span>
        <span className="span-sensor-normal">3</span>
      </div>
    </div>
  );
};

export default ParticleData;
