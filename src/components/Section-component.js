import React from "react";

const SectionComponent = () => {
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
          <button onClick={() => changePicture1("1")}>1</button>
          <button onClick={() => changePicture1("2")}>2</button>
          <button onClick={() => changePicture1("3")}>3</button>
          <button onClick={() => changePicture1("4")}>4</button>
          <button onClick={() => changePicture1("5")}>5</button>
          <button onClick={() => changePicture1("6")}>6</button>
        </span>
        <span className="newCard">
          <img src={require("../photo-resource/newCard.jpg")} alt="newCard" />
        </span>
        <img className="New" src={require("../photo-resource/pic1.jpg")} alt="New" />

        {/* hotPicture */}
      </div>
      <div className="hot1">
        <span className="button2">
          <button onClick={() => changePicture2("1")}>1</button>
          <button onClick={() => changePicture2("2")}>2</button>
          <button onClick={() => changePicture2("3")}>3</button>
          <button onClick={() => changePicture2("4")}>4</button>
          <button onClick={() => changePicture2("5")}>5</button>
          <button onClick={() => changePicture2("6")}>6</button>
        </span>
        <span className="hotCard">
          <img src={require("../photo-resource/hotCard.jpg")} alt="hotCard" />
        </span>
        <img className="Hot" src={require("../photo-resource/hot1.jpg")} alt="Hot" />
      </div>

      {/* babyPicture */}
      <div className="baby1">
        <span className="button3">
          <button onClick={() => changePicture3("1")}>1</button>
          <button onClick={() => changePicture3("2")}>2</button>
          <button onClick={() => changePicture3("3")}>3</button>
          <button onClick={() => changePicture3("4")}>4</button>
          <button onClick={() => changePicture3("5")}>5</button>
          <button onClick={() => changePicture3("6")}>6</button>
        </span>
        <span className="babyCard">
          <img src={require("../photo-resource/babyCard.jpg")} alt="babyCard" />
        </span>
        <img className="Baby" src={require("../photo-resource/baby1.jpg")} alt="Baby" />
      </div>

      {/* coBrandPicture */}
      <div className="coBrand1">
        <span className="button4">
          <button onClick={() => changePicture4("1")}>1</button>
          <button onClick={() => changePicture4("2")}>2</button>
          <button onClick={() => changePicture4("3")}>3</button>
          <button onClick={() => changePicture4("4")}>4</button>
          <button onClick={() => changePicture4("5")}>5</button>
          <button onClick={() => changePicture4("6")}>6</button>
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
