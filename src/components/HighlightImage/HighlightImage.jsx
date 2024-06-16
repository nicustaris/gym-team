import React from "react";

import HighlightImg from "./highlight_background.jpg";
import "./HighlightImage.scss";

const HighlightImage = () => {
  return (
    <section className="highlight__container">
      <img src={HighlightImg} alt="Highlight Image" />
    </section>
  );
};

export default HighlightImage;
