import React from "react";
import "./login.css";

export default function LogIn() {
  return (
    <div className="logInContainer">
      <div className="logInLeft">
        <img className="logo" src="/slice.png" alt="" />
      </div>
      <div className="logInRight">
        <div className="component1">
          <img className="rightLogo" src="/slice.png" alt="" />
          <span className="titleText">Piza</span>
        </div>
        <div className="component2">
          <h1>LogIn</h1>
        </div>
        <div className="component3">
          <div className="inputContainer">
            <input type="text" className="inputField" required />
            <label className="floatingLabel">Email</label>
          </div>
          <div className="inputContainer">
            <input type="password" className="inputField" required />
            <label className="floatingLabel">Password</label>
          </div>
          <div className="rememberMeContainer">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="rememberMeLabel">
              Remember me
            </label>
          </div>
          <button className="loginButton">Log In</button>
        </div>
        <span className="finalText">
          Have No Account? <span className="signUpText">Sign Up</span>
        </span>
      </div>
    </div>
  );
}
