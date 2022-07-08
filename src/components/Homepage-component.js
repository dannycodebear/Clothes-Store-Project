import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "./Header-component";
import NavComponent from "./Nav-component";
import SectionComponent from "./Section-component";

const HomepageComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <SectionComponent />
    </div>
  );
};

export default HomepageComponent;
