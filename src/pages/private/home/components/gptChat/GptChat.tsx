import React from "react";
import LogoGPT from "../../../../../assets/gpt-vsg";
import "./GptChat.Style.css";
interface GptChat {
  // Definir las propiedades del componente, si es necesario
}

const GptChat: React.FC<GptChat> = () => {
  return (
    <div className="wrapper-gpt-chat">
      <header className="header-gpt-wrapper">
        <h1 className="tittle-gpt-chat">Analítica de datos Power by </h1>
        <span className="logo-gpt-chat">
          <LogoGPT /> <h1 className="tittle-gpt-chat">OpenAI</h1>
        </span>
      </header>
      <div className="wrapper-chat"></div>
      <div className="wrapper-input-gpt">
        <input
          className="input-prompt-gpt"
          placeholder="Que deseas saber sobre los datos recolectados...."
        />
        <button className="button-submit">
          <i
            className="bi bi-send"
            style={{ fontSize: "24px", color: "white" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default GptChat;
