import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

import { useAuthValue } from "./store/AuthContext/AuthProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const promise = loadStripe(
  "pk_test_51LFOOvEZSxGBm7Ldz8rGcS33oFCGZPnT86ZAfzwYGuMngEemTr7uyAvwiSmU9pvVEt6mQyuvOpfTPzmnnVgZWBqt0053iVwpU6"
);

axios.defaults.baseURL =
  "https://us-central1-challenge-5a06f.cloudfunctions.net/api";
// "http://localhost:5001/challenge-5a06f/us-central1/api";

function App() {
  const [{}, dispatch] = useAuthValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
