import "./App.css";
import Home from "./pages/private/home/Home.tsx";
import Login from "./pages/public/login/Login.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";

function App() {
  const token = localStorage.getItem("token");
  return (
    <AuthProvider>
      {token !== undefined && token !== null && token !== "" ? (
        <Home />
      ) : (
        <Login />
      )}
    </AuthProvider>
  );
}

export default App;
