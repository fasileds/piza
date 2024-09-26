import React from "react";
import "./footer.css";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTopLeft">
          <ul>
            <li>HOME</li>
            <li>Order</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footerTopright">
          <div className="rightTop">
            <img src="/slice.png" alt="Pizza Logo" />
            <span>Piza</span>
          </div>
          <div className="rightBotom">
            <input type="text" placeholder="Enter your email" />
            <SendIcon />
          </div>
        </div>
      </div>
      <div className="footerBotom">
        <div className="footerBotomLeft">
          <span>@2024 All Rights Reserved</span>
          <span>Terms and Conditions</span>
        </div>
        <div className="footerBotomRight">
          {/* Placeholder for future social media icons */}
        </div>
      </div>
    </div>
  );
}
