import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
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
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading ...</div>}>
        <Base>
          <AppRoutes />
        </Base>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
