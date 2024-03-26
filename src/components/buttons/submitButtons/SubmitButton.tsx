import React from "react";
import "./SubmitButton.Style.css";

interface SubmitButton {
  // Definir las propiedades del componente, si es necesario
}
const SubmitButton: React.FC<SubmitButton> = () => {
  return (
    <div className="wrapper-submit-button">
      <button className="submit-button"> Iniciar sesión </button>
    </div>
  );
};

export default SubmitButton;
