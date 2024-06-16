import React, { useState } from "react";

import logo from "../../assets/img/exercise.avif"; // Correct import statement
import "../../styles/register.css";
import Header from "../Header/Header";

function Register() {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div
      className={
        isDarkMode ? "dark-mode-app background" : "light-mode-app background"
      }
    >
        <Header
        className="header" isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      <div className="outerDiv">
        <div className="innerDiv1">
          <img src={logo} alt="Logo" className="img"/>
        </div>
        <div className="innerDiv2">
          <div className="txt">Create Account</div>
          <div className="btns">
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <div>Continue With Google</div>
            </div>
            <div className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
              <div>Continue With Facebook</div>
            </div>
          </div>
          <div className="lines">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>
          <div className="input-container">
            <input type="email" placeholder=" " id="email" />
            <label htmlFor="email">E-mail address</label>
          </div>
          <div className="input-container">
            <input type="text" placeholder=" " id="name" />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" " id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-container">
            <input type="password" placeholder=" " id="password" />
            <label htmlFor="password">Confirm Password</label>
          </div>

          <button class="account" role="button">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
