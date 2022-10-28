import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import { store } from "../app/store/stores/Card/card-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
