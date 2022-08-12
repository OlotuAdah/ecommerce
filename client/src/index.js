import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import axios from "axios";
import { API } from "./backend";
import Base from "./core/Base.jsx";
//
axios.defaults.baseURL = API;
//
ReactDOM.render(
  <React.StrictMode>
    <Base>
      <AppRoutes />
    </Base>
  </React.StrictMode>,
  document.getElementById("root")
);
