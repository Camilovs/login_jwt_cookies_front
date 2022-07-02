import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../pages/Auth/Login";
import { Registro } from "../pages/Auth/Registro";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper  ">
          <div className="auth-inner animate__animated animate__faster animate__fadeIn">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Registro />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
