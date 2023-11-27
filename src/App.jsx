import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Dashboard from "../src/pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Header from "../src/components/Header/Header";
import Cursor from "./components/cursor/cursor";
import Footer from "./components/Footer/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = ({ username, password }) => {
    setIsAuthenticated(true);
  };
  return (
    <>
      <Cursor />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate replace to="/" />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
