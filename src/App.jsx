import "./App.css";
import Home from "./pages/private/home/Home.jsx";
import Login from "./pages/public/login/Login.jsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./configs/ProtectedRoute.jsx";

function App() {
  const token = localStorage.getItem("token");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
