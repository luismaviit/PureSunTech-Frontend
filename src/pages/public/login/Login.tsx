import React from "react";
import Logo from "../../../assets/pre-sun-tech-logo.png";
import InputField from "../../../components/inputsFields/InputField";
import SubmitButton from "../../../components/buttons/submitButtons/SubmitButton";
import "./Login.style.css"
interface Login {
  // Definir las propiedades del componente, si es necesario
}
const Login: React.FC<Login> = () => {
  return (
    <div className="wrapper-login">
      <div className="card-login">
        <img src={Logo} className="logo-login" />
        <p>Ingresa tus credenciales para continuar</p>
        <div className="wrapper-form">
          <InputField />
          <InputField />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
