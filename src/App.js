import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register } from "./components";
import Home from "./Home";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </div>
  </Router>
);

export default App;
