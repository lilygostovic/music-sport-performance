import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages";
import React from "react";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
