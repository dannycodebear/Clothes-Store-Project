import React, { useState } from "react";

const SectionComponent = () => {
  window.onload = function () {
    let New = ["pic0.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
    let Hot = ["hot0.jpg", "hot1.jpg", "hot2.jpg", "hot3.jpg", "hot4.jpg", "hot5.jpg"];
    let Baby = ["baby0.jpg", "baby1.jpg", "baby2.jpg", "baby3.jpg", "baby4.jpg", "baby5.jpg"];
    let coBrand = [
      "coBrand0.jpg",
      "coBrand1.jpg",
      "coBrand2.jpg",
      "coBrand3.jpg",
      "coBrand4.jpg",
      "coBrand5.jpg"
    ];
    let i = 0;
    let autoChangeNewPicture = document.querySelector("img.New");
    autoChangeNewPicture.src = require("../photo-resource/pic0.jpg");

    let autoChangeHotPicture = document.querySelector("img.Hot");
    autoChangeHotPicture.src = require("../photo-resource/hot0.jpg");

    let autoChangeBabyPicture = document.querySelector("img.Baby");
    autoChangeBabyPicture.src = require("../photo-resource/baby0.jpg");

    let autoChangeCoBrandPicture = document.querySelector("img.coBrand");
    autoChangeCoBrandPicture.src = require("../photo-resource/coBrand0.jpg");

    function time() {
      i++;
      i = i % 6;
      autoChangeNewPicture.src = require(`../photo-resource/${New[i]}`);
      autoChangeHotPicture.src = require(`../photo-resource/${Hot[i]}`);
      autoChangeBabyPicture.src = require(`../photo-resource/${Baby[i]}`);
      autoChangeCoBrandPicture.src = require(`../photo-resource/${coBrand[i]}`);
    }
    setInterval(time, 3000);
  };

  const changePicture1 = (num) => {
    document.querySelector("img.New").src = require(`../photo-resource/pic${num}.jpg`);
  };

  const changePicture2 = (num) => {
    document.querySelector("img.Hot").src = require(`../photo-resource/hot${num}.jpg`);
  };

  const changePicture3 = (num) => {
    document.querySelector("img.Baby").src = require(`../photo-resource/baby${num}.jpg`);
  };

  const changePicture4 = (num) => {
    document.querySelector("img.coBrand").src = require(`../photo-resource/coBrand${num}.jpg`);
  };

  return (
    <section>
      {/* newPicture */}
      <div className="pic1">
        <span className="button1">
          <button onClick={() => changePicture1("0")}>1</button>
          <button onClick={() => changePicture1("1")}>2</button>
          <button onClick={() => changePicture1("2")}>3</button>
          <button onClick={() => changePicture1("3")}>4</button>
          <button onClick={() => changePicture1("4")}>5</button>
          <button onClick={() => changePicture1("5")}>6</button>
        </span>
        <span className="newCard">
          <img src={require("../photo-resource/newCard.jpg")} alt="newCard" />
        </span>
        <img className="New" src={require("../photo-resource/pic0.jpg")} alt="New" />

        {/* hotPicture */}
      </div>
      <div className="hot1">
        <span className="button2">
          <button onClick={() => changePicture2("0")}>1</button>
          <button onClick={() => changePicture2("1")}>2</button>
          <button onClick={() => changePicture2("2")}>3</button>
          <button onClick={() => changePicture2("3")}>4</button>
          <button onClick={() => changePicture2("4")}>5</button>
          <button onClick={() => changePicture2("5")}>6</button>
        </span>
        <span className="hotCard">
          <img src={require("../photo-resource/hotCard.jpg")} alt="hotCard" />
        </span>
        <img className="Hot" src={require("../photo-resource/hot1.jpg")} alt="Hot" />
      </div>
      {/* babyPicture */}
      <div className="baby1">
        <span className="button3">
          <button onClick={() => changePicture3("0")}>1</button>
          <button onClick={() => changePicture3("1")}>2</button>
          <button onClick={() => changePicture3("2")}>3</button>
          <button onClick={() => changePicture3("3")}>4</button>
          <button onClick={() => changePicture3("4")}>5</button>
          <button onClick={() => changePicture3("5")}>6</button>
        </span>
        <span className="babyCard">
          <img src={require("../photo-resource/babyCard.jpg")} alt="babyCard" />
        </span>
        <img className="Baby" src={require("../photo-resource/baby1.jpg")} alt="Baby" />
      </div>
      {/* coBrandPicture */}
      <div className="coBrand1">
        <span className="button4">
          <button onClick={() => changePicture4("0")}>1</button>
          <button onClick={() => changePicture4("1")}>2</button>
          <button onClick={() => changePicture4("2")}>3</button>
          <button onClick={() => changePicture4("3")}>4</button>
          <button onClick={() => changePicture4("4")}>5</button>
          <button onClick={() => changePicture4("5")}>6</button>
        </span>
        <span className="coBrandCard">
          <img src={require("../photo-resource/coBrandCard.jpg")} alt="coBrandCard" />
        </span>
        <img className="coBrand" src={require("../photo-resource/coBrand1.jpg")} alt="coBrand" />
      </div>
    </section>
  );
};

export default SectionComponent;
