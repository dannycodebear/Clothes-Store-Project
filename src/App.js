import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import HomepageComponent from "./components/Homepage-component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomepageComponent />} />
      </Routes>
    </div>
  );
};

export default App;
