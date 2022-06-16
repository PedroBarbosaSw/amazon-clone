import React from "react";
import "./styles.css";
import { useBasketValue } from "../../store/BasketContext/BasketProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useBasketValue();

  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="book" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
