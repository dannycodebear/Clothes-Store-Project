import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/HotPage">暢銷</Link>
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
    </nav>
  );
};

export default NavComponent;
