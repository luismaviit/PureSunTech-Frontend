import React from "react";
import "./inputField.style.css";
import { AuthContext } from "../../context/AuthProvider";
// Definir las propiedades del componente
interface InputFieldProps {
  label?: string; // Label opcional para el input
  type: string; // Tipo de input, como 'text', 'password', etc.
  name: string; // Nombre del campo input
  placeholder?: string; // Placeholder opcional para el input
}

// Componente InputField con props definidos
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  placeholder,
}) => {
  const { input, setInput } = React.useContext(AuthContext);
  const [value, setValue] = React.useState<string>();
  const [showPassword, setShowPassword] = React.useState<boolean>(true);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(input);
    const key = event.target.name;
    const value = event.target.value;
    setInput((prevInput) => ({
      ...prevInput,
      [key]: value,
    }));
  }

  React.useEffect(() => {
    if (input?.[name] !== undefined) {
      setValue(input[name]);
    }
  }, [input?.[name]]);

  return (
    <div className="wrapper-input-field">
      {label && <label htmlFor={name}>{label}</label>}{" "}
      {/* Renderizar label si existe */}
      <input
        onChange={handleChange}
        value={value}
        type={showPassword ? `${type}` : "text"}
        name={name}
        placeholder={placeholder}
        className="input-field"
      />
      {type === "password" && (
        <span
          className="wrapper-button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <i className="bi bi-eye"></i>
          ) : (
            <i className="bi bi-eye-slash"></i>
          )}
        </span>
      ) }
    </div>
  );
};

export default InputField;
