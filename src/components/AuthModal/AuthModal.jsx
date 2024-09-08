import React, { useState } from "react";

import "./AuthModal.scss";

// React icons
import { FaPlay } from "react-icons/fa";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="authmodal">
      <div className="authmodal__blur"></div>
      <div className="authmodal__authentication">
        <div className="authmodal__authentication__container">
          <p>Start for free</p>
          <div className="authmodal__authentication__switch">
            <button className="authmodal__switch__btn">Sign in</button>
            <button className="authmodal__switch__btn">Register</button>
          </div>
          <form className="authmodal__authentication__form">
            <div className="authmodal__input__wrapper">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="authmodal__authentication__form__input"
              />
              <label
                className={`authmodal__authentication__form__label ${
                  email ? "filled" : ""
                }`}
              >
                Email
              </label>
            </div>
            <div className="authmodal__input__wrapper">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="authmodal__authentication__form__input"
              />
              <label
                className={`authmodal__authentication__form__label ${
                  password ? "filled" : ""
                }`}
              >
                Password
              </label>
            </div>
            <div className="authmodal__authentication__form__submit">
              <button className="authmodal__authentication__button">
                <FaPlay size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
