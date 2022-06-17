import React from "react";
import "./styles.css";
import SubTotal from "../../components/SubTotal";
import { useBasketValue } from "../../store/BasketContext/BasketProvider";
import CheckoutProduct from "../../components/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useBasketValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="background"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
