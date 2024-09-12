import React, { useState } from "react";

import "./AuthModal.scss";
import SignIn from "./SignIn";
import Register from "./Register";

// React icons
import { MdClose } from "react-icons/md";

const AuthModal = ({ isUserMenuOpen, setIsUserMenuOpen }) => {
  const [authMode, setAuthMode] = useState("signIn");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="authmodal">
      <div className="authmodal__blur"></div>
      <div className="authmodal__authentication">
        <div className="authmodal__authentication__close">
          <button>
            <MdClose
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              size={21}
            />
          </button>
        </div>
        <div className="authmodal__authentication__container">
          <p>Start for free</p>
          <div className="authmodal__authentication__switch">
            <button
              onClick={() => setAuthMode("signIn")}
              className={`authmodal__switch__btn ${
                authMode === "signIn" ? "active" : ""
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setAuthMode("register")}
              className={`authmodal__switch__btn ${
                authMode === "register" ? "active" : ""
              }`}
            >
              Register
            </button>
          </div>
          {authMode === "signIn" ? <SignIn /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
