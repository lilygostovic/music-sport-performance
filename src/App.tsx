import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Home, SpotifyToken, StravaToken } from "./pages";

import React from "react";

const App = () => {
  const spotifyToken = localStorage.getItem("spotifyAccessToken");
  const stravaToken = localStorage.getItem("stravaAccessToken");

  const isAuthenticated = spotifyToken !== null && stravaToken !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route path="/token/strava" element={<StravaToken />} />
        <Route path="/token/spotify" element={<SpotifyToken />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
