import React from "react";

const HomepageComponent = () => {
  return (
    <header>
      {/* Header */}
      <div className="headerBar">
        <img src={require("../photo-resource/Logo.svg.png")} alt="Logo" />
        <input type="text" />
        <ul>
          <li>幫助</li>
          <li>會員</li>
          <li>最愛</li>
          <li>購物車</li>
        </ul>
      </div>
      {/* Nav Bar */}
      <div className="nav">
        <ul>
          <li>暢銷</li>
          <li>男裝</li>
          <li>女裝</li>
          <li>童裝</li>
        </ul>
      </div>
      {/* Section */}
      <div className="section">
        <img src={require("../photo-resource/pic.jpeg")} alt="New" />
        <img src={require("../photo-resource/hot.jpg")} alt="Hot" />
        <img src={require("../photo-resource/lm.jpg")} alt="LM" />
        <img src={require("../photo-resource/baby.jpg")} alt="Baby" />
      </div>
    </header>
  );
};

export default HomepageComponent;
