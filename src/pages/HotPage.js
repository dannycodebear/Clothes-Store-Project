import React from "react";
import HeaderComponent from "../components/Header-component";

const HotPage = () => {
  const changeClothe = () => {
    document.querySelector(
      "img.li"
    ).src = require(`../photo-resource/man-clothe/clothe 0/COL03-clothe.jpg`);
  };

  const changeClothe1 = () => {
    document.querySelector(
      "img.li"
    ).src = require(`../photo-resource/man-clothe/clothe 0/COL00-clothe.jpg`);
  };

  let i = 0;

  return (
    <div className="COL00-clothe">
      <HeaderComponent />
      <div className="container">
        <a href="#">
          <img
            className="li"
            src={require("../photo-resource/man-clothe/clothe 0/COL00-clothe.jpg")}
            alt="COL00-clothe"
          />
        </a>

        <div>
          <ul>
            <li>
              <img
                onClick={changeClothe1}
                src={require("../photo-resource/man-clothe/clothe 0/COL00.jpg")}
                alt=""
              />
            </li>
            <li>
              <img
                onClick={changeClothe}
                src={require("../photo-resource/man-clothe/clothe 0/COL03.jpg")}
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotPage;
