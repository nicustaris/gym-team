import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SignIn from "./SignIn";
import Register from "./Register";
import "./AuthModal.scss";

import default_photo from "./defaultphoto.webp";

// React icons
import { MdClose } from "react-icons/md";

const AuthModal = ({ isUserMenuOpen, setIsUserMenuOpen }) => {
  const [authMode, setAuthMode] = useState("signIn");
  const [delayedActive, setDelayedActive] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (isUserMenuOpen) {
      setTimeout(() => {
        setDelayedActive(true);
      }, 100);
    } else {
      setDelayedActive(false);
    }
  }, [isUserMenuOpen]);

  return (
    <>
      <div className={`authmodal ${delayedActive ? "delayed-active" : ""}`}>
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
          {currentUser ? (
            <div className="authmodal__profile">
              <div className="authmodal__profile__picture">
                <img src={default_photo} />
                <div className="authmodal__profile__picture__add">
                  <button>Upload new photo</button>
                  <p>JPG or PNG is allowed</p>
                </div>
              </div>
              <div className="authmodal__profile__details">name</div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
