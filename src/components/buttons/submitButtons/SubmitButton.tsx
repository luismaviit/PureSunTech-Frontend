import React from "react";
import "./SubmitButton.Style.css";


interface SubmitButton {
  onClick: () => void;
}
const SubmitButton: React.FC<SubmitButton> = ({onClick}) => {
  return (
    <div className="wrapper-submit-button">
      <button className="submit-button" onClick={onClick}> Iniciar sesión </button>
    
    </div>
  );
};

export default SubmitButton;
