import React from "react";
import { Router , Route , Routes } from "react-router-dom";
function App() {

  {/* Router Component */}
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
