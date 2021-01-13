import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
