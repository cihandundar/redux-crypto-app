import AppleIcon from "assets/icons/AppleIcon";
import GoogleIcon from "assets/icons/GoogleIcon";
import React from "react";

const Popup = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__title">
          <h3>Login to track your favorite coin easily 🚀</h3>
        </div>
      </div>
      <div className="login__input">
        <div className="login__input__item">
          <input type="email" placeholder="Email" />
        </div>
        <div className="login__input__item">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="login__btn">
        <button className="btn">Login</button>
        <span className="or">or</span>
        <button className="icon">
          <span>
            <GoogleIcon />
          </span>
          Continue with Google
        </button>
        <button className="icon">
          <span>
            <AppleIcon />
          </span>
          Continue with Apple
        </button>
      </div>
    </div>
  );
};

export default Popup;
