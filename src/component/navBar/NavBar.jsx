import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="leftSide">
        <img
          className="sliceImage"
          src="/slice.png"
          alt="pizza image is not here"
        />
        <span className="imageText">Pizza</span>
      </div>
      <span className="spantext">HOME</span>
      <span className="spantext">ORDER</span>
      <span className="spantext">ABOUT US</span>
      <button className="buttons">Register</button>
    </div>
  );
}
