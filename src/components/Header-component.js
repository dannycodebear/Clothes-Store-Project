import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  let i = 0;
  return (
    <header>
      <div className="headerBar">
        <a href="/">
          <img src={require("../photo-resource/Logo.svg.png")} alt="Logo" title="Clothe Homepage" />
        </a>
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
    </header>
  );
};

export default HeaderComponent;
