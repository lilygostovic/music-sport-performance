import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Home } from "./pages";

import React from "react";

const App = () => {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
