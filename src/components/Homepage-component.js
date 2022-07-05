import React from "react";

const HomepageComponent = () => {
  return (
    <header>
      <img src={require("../photo-resource/Logo.svg.png")} alt="Logo" />
      <input type="text" />
      <ul>
        <li>幫助</li>
        <li>會員</li>
        <li>最愛</li>
        <li>購物車</li>
      </ul>
    </header>
  );
};

export default HomepageComponent;
