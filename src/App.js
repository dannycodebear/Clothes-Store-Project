import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Homepage from "./pages/Homepage";
import HotPage from "./pages/HotPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/HotPage" element={<HotPage />} />
      </Routes>
    </div>
  );
};

export default App;
