import React, { createContext, useState, ReactNode } from "react";

// Definir el tipo para el estado
type AuthState = {
  input: {
    [key: string]: string | undefined;
  };
};

// Definir el tipo para las props del AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

// Definir el tipo para el contexto
type AuthContextType = {
  input: AuthState["input"];
  setInput: React.Dispatch<React.SetStateAction<AuthState["input"]>>;};

// Crear el contexto
export const AuthContext = createContext<AuthContextType>({
  input: {},
  setInput: () => {}
});

// Definir el componente AuthProvider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Inicializar el estado
  const [input, setInput] = useState<AuthState["input"]>({});

  return (
    <AuthContext.Provider
      value={{
        input,
        setInput
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
