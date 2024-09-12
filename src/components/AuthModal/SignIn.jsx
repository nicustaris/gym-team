import React, { useState } from "react";

// React icons
import { FaPlay } from "react-icons/fa";

const SignIn = React.memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("LOGIN");
  return (
    <form className="authmodal__authentication__form">
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
});

export default SignIn;
