import React from "react";
import { Router , Route , Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/auth/Login";
function App() {

  {/* Router Component */}
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
