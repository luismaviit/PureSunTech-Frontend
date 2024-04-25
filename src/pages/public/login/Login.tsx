import React from "react";
import Logo from "../../../assets/pre-sun-tech-logo.png";
import InputField from "../../../components/inputsFields/InputField";
import SubmitButton from "../../../components/buttons/submitButtons/SubmitButton";
import { AuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Login.style.css"
interface Login {
  // Definir las propiedades del componente, si es necesario
}

const Login: React.FC<Login> = () => {
  const { input } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const data = {
    name: input.user,
    password:input.password
  }
  function handlesubmit() {
   /*  if (user === undefined || user === null || user === "") {
      setErrorUser(true);
    } else {
      setErrorUser(false);
    }

    if (password === undefined || password === null || password === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    } */

    if (data.name && data.password) {
      fetch("https://puresuntech.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          password: data.password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Petición exitosa
            return response.json();
          } else {
            throw new Error("Error en la petición");
          }
        })
        .then((data) => {
          console.log("Respuesta del servidor:", data);

          if (data.token) {
            navigate("/home");
            localStorage.setItem("token", data.token);
            console.log(
              "Token almacenado en localStorage:",
              localStorage.getItem("token")
            );
          }
        })
        .catch((error) => {
          // Capturar errores
          console.error("Error:", error);
        });
    }

   
  }
  return (
    <div className="wrapper-login">
      <div className="card-login">
        <img src={Logo} className="logo-login" />
        <p>Ingresa tus credenciales para continuar</p>
        <div className="wrapper-form">
          <InputField placeholder="Usuario" type="text" name="user"/>
          <InputField placeholder="Contraseña" type="password" name="password"/>
          <SubmitButton  onClick={handlesubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
