import "./App.css";
import Home from "./pages/private/home/Home.tsx";
import Login from "./pages/public/login/Login.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
