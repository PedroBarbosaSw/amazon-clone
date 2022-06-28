const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LFOOvEZSxGBm7LduFtYb3QUf3nAblNe9Pj898mlFFQIcD2YihXONyoiJiHRXs5z10fEebYMChaEA7Sg5oEuCcvt00x8yusoX8"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello, World!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201 - OK, Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-5a06f/us-central1/api
