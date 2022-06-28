import React, { useEffect, useState } from "react";
import "./styles.css";

import { db } from "../../firebase";
import { useAuthValue } from "../../store/AuthContext/AuthProvider";

import Order from "../../components/Order";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useAuthValue();

  useEffect(() => {
    if (!user) {
      setOrders([]);
    }

    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, []);

  console.log(orders);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
