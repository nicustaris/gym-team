import React, { useState } from "react";

import { supabase } from "../../utils/supabase.js";

// React icons
import {
  FaPlay,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Sign-in successful");
    }
  };

  // const handleOAuthSignIn = async (provider) => {
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider,
  //   });

  //   if (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <form
      onSubmit={handleEmailSignIn}
      className="authmodal__authentication__form"
    >
      <div className="authmodal__authentication__social">
        <FaGoogle size={21} onClick={() => handleOAuthSignIn("google")} />
        <FaFacebook size={21} onClick={() => handleOAuthSignIn("facebook")} />
        <FaGithub size={21} onClick={() => handleOAuthSignIn("github")} />
        <FaTwitter size={21} onClick={() => handleOAuthSignIn("twitter")} />
      </div>
      {error && (
        <p className="authmodal__authentication__form__error">{error}</p>
      )}
      <div className="authmodal__input__wrapper">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          value={password}
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
  );
};

export default SignIn;
