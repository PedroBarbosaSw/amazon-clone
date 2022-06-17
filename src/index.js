import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BasketProvider } from "./store/BasketContext/BasketProvider";
import BasketReducer, {
  initialState as initialBasketState,
} from "./store/BasketContext/BasketReducer";
import { AuthProvider } from "./store/AuthContext/AuthProvider";
import AuthReducer, {
  initialState as initialAuthState,
} from "./store/AuthContext/AuthReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider initialState={initialAuthState} reducer={AuthReducer}>
      <BasketProvider initialState={initialBasketState} reducer={BasketReducer}>
        <App />
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>
);
