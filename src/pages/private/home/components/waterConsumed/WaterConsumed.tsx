import React from "react";
import "./WaterConsumed.Style.css";
interface WaterConsumed {
  // Definir las propiedades del componente, si es necesario
}

const WaterConsumed: React.FC<WaterConsumed> = () => {
  // Resto del código del componente

  return (
    <div className="wrapper-water-consumed">
      <h1 className="tittle">Cantidad de Agua consumida</h1>
      <h1 className="quantity">5 Litros </h1>
      <hr className="divisor" />
      <h6 className="last-cleanings">Consumo ultimas 5 limpiezas</h6>
      <ul className="wrapper-list">
        <li className="date-cleanings">0.5L |</li>
        <li className="date-cleanings">0.5L |</li>
        <li className="date-cleanings">0.5L |</li>
        <li className="date-cleanings">0.5L |</li>
        <li className="date-cleanings">0.5L </li>
      </ul>
    </div>
  );
};

export default WaterConsumed;
