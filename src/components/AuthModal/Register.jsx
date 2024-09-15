import React, { useState } from "react";

import { supabase } from "../../utils/supabase.js";

// React icons
import { FaPlay } from "react-icons/fa";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    const { data, error: registerError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: "Nicolae",
          last_name: "Staris",
        },
      },
    });

    if (registerError) {
      setError(registerError.message);
      console.log(registerError);
      return;
    }

    console.log(data);
  };

  return (
    <form onSubmit={handleRegister} className="authmodal__authentication__form">
      {error && <p>{error}</p>}
      <div className="authmodal__input__wrapper">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          className="authmodal__authentication__form__input"
        />
        <label
          className={`authmodal__authentication__form__label ${
            firstName ? "filled" : ""
          }`}
        >
          First name
        </label>
      </div>
      <div className="authmodal__input__wrapper">
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          className="authmodal__authentication__form__input"
        />
        <label
          className={`authmodal__authentication__form__label ${
            lastName ? "filled" : ""
          }`}
        >
          Last name
        </label>
      </div>
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

export default Register;
