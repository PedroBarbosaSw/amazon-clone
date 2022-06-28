import React from "react";
import "./styles.css";
import CurrencyFormat from "react-currency-format";
import { useBasketValue } from "../../store/BasketContext/BasketProvider";
import { getBasketTotal } from "../../store/BasketContext/BasketReducer";

import { useNavigate } from "react-router-dom";

function SubTotal() {
  const navigate = useNavigate();
  const [{ basket }] = useBasketValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
