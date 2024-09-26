import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="logInContainer">
      <div className="logInLeft">
        <img className="logo" src="/slice.png" alt="Logo" />
      </div>
      <div className="logInRight">
        <div className="component1">
          <img className="rightLogo" src="/slice.png" alt="App Logo" />
          <span className="titleText">Piza</span>
        </div>
        <h1 className="loginHeader">Sign Up</h1>
        <div className="component3">
          <div className="inputContainer">
            <input type="text" className="inputField" required />
            <label className="floatingLabel">Email</label>
          </div>
          <div className="inputContainer">
            <input type="password" className="inputField" required />
            <label className="floatingLabel">Password</label>
          </div>
          <div className="inputContainer">
            <input type="text" className="inputField" required />
            <label className="floatingLabel">Location</label>
          </div>
          <div className="inputContainer">
            <input type="number" className="inputField" required />
            <label className="floatingLabel">Phone Number</label>
          </div>
          <div className="rememberMeContainer">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="rememberMeLabel">
              I accept terms and conditions
            </label>
          </div>
          <button className="loginButton">Sign Up</button>
        </div>
        <span className="finalText">
          Have an Account? <span className="signUpText">Sign In</span>
        </span>
      </div>
    </div>
  );
}
