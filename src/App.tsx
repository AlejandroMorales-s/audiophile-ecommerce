import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
