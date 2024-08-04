import React from "react";

import background from "./background.jpg";

import "./TrialVisit.scss";

const TrialVisit = () => {
  return (
    <div className="trial__container">
      <h1 className="trial__container__heading">Get Your First Trial Visit</h1>
      <p className="trial__container__paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
        voluptatibus placeat error ut debitis qui, similique quisquam cumque
        maiores dolorem? Error, soluta ratione.
      </p>
      <div className="trial__container__submit">
        <input type="text" placeholder="sample@example.com" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default TrialVisit;
