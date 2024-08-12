import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

console.log("Base URL in App:", import.meta.env.VITE_BASE_URL);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
