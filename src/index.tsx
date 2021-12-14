import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Global } from "hyosun-design-system";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
