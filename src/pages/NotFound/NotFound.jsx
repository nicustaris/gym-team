import React, { useState } from "react";

import "./NotFound.scss";

const NotFound = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <div className={`notfound ${isError ? "active" : ""}`}></div>
      <button onClick={() => setIsError(!isError)}>Toggle</button>
    </>
  );
};

export default NotFound;
