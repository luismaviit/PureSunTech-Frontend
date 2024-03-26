import React from "react";
import "./inputField.style.css";
interface InputField {
  // Definir las propiedades del componente, si es necesario
}

const InputField: React.FC<InputField> = () => {
  return (
    <div className="wrapper-input-field">    
      <input type="text" placeholder="usuario" className="input-field"/>
    </div>
  );
};

export default InputField;
