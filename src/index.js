import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./store/BasketContext/BasketReducer";
import { BasketProvider } from "./store/BasketContext/BasketProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BasketProvider initialState={initialState} reducer={reducer}>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
