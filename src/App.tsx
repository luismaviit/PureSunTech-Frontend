import "./App.css";
import Home from "./pages/private/home/Home.tsx";
import Login from "./pages/public/login/Login.tsx";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      {token !== undefined && token !== null && token !== "" ? (
        <Home />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
