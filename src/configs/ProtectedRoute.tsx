/* import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [tokens, setTokens] = React.useState(localStorage.getItem("token"));
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    setTokens(token);
  }, []);

  if (tokens != null && tokens != undefined && tokens != "") {
   
    return <Navigate to="/home" />;
  }

  return <>{children} </>;
}
 */