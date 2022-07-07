import React from "react";
import { Link } from "react-router-dom";

const HomepageComponent = () => {
  const changePictureRight = () => {
    if (true) {
      let i = 1;
      document.querySelector("img.New").src = require(`../photo-resource/pic${i}.jpg`);

      i += 1;
      console.log(i);
    }
  };

  return (
    <header>
      {/* Header */}
      <div className="headerBar">
        <img src={require("../photo-resource/Logo.svg.png")} alt="Logo" />
        <input type="text" />
        <ul>
          <li>
            <Link to="/">幫助</Link>
          </li>
          <li>
            <Link to="/">會員</Link>
          </li>
          <li>
            <Link to="/">最愛</Link>
          </li>
          <li>
            <Link to="/">購物車</Link>
          </li>
        </ul>
      </div>
      {/* Nav Bar */}
      <div className="nav">
        <ul>
          <li>
            <Link to="/">暢銷</Link>
          </li>
          <li>
            <Link to="/">男裝</Link>
          </li>
          <li>
            <Link to="/">女裝</Link>
          </li>
          <li>
            <Link to="/">童裝</Link>
          </li>
        </ul>
      </div>
      {/* Section */}
      <div className="section">
        <span>
          <button className="left-button">left</button>
          <img className="New" src={require("../photo-resource/pic.jpeg")} alt="New" />
          <button onClick={changePictureRight} className="right-button">
            right
          </button>
        </span>
        <img src={require("../photo-resource/hot.jpg")} alt="Hot" />
        <img src={require("../photo-resource/lm.jpg")} alt="LM" />
        <img src={require("../photo-resource/baby.jpg")} alt="Baby" />
      </div>
    </header>
  );
};

export default HomepageComponent;
