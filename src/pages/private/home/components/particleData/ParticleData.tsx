import React from "react";
import "./ParticleData.Style.css";

interface ParticleData {
  // Definir las propiedades del componente, si es necesario
}

const ParticleData: React.FC<ParticleData> = () => {
  // Resto del código del componente

  return (
    <div className="wrapper-particle-data">
      <h1 className="tittle">Datos de Luxes en Lavanderia</h1>
      <div className="wrapper-data-sensors ">
        <span>Sensor uno --{`>`} 897 Luxes</span>
        <span>Sensor dos --{`>`} 745 Luxes</span>{" "}
        <span>Sensor tres --{`>`} 620 Luxes</span>
      </div>
      <hr className="divisor"/>
      <span className="average">Promedio --{`>`} 754 Luxes</span>

      <div className="action-buttons">
        <hr className="divisor"/>
        <span className="values"> Valores normales</span>
      
       {/*  <span> Valores Altos</span> */}
        <button className="button-cleaner">Ejecutar Limpieza</button>
       {/*  <div className="wrapper-sensors">
          <span className="span-sensor-selected">1</span>
          <span className="span-sensor-normal">2</span>
          <span className="span-sensor-normal">3</span>
        </div> */}
      </div>
    </div>
  );
};

export default ParticleData;
