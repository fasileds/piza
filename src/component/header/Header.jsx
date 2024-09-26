import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <div className="headerTitle">
          <h1>Order Us</h1>
        </div>
        <div className="headerText">
          <span>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </span>
        </div>
        <div className="headerSerch">
          <input type="text" placeholder="Search..." />
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="rightHeader">
        <img className="image1" src="/leaf.png" alt="Leaf Image" />
        <img className="image2" src="/half.png" alt="Half Image" />
      </div>
    </div>
  );
}
