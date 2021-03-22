import React from "react";
import ReactDOM from "react-dom";
import App from "./entries/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
