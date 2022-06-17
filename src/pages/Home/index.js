import React from "react";
import Product from "../../components/Product";
import "./styles.css";
import { twoProducts, threeProducts, oneProduct } from "../../mocks/data";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background"
        />

        <div className="home__row">
          {twoProducts.map((item) => (
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {threeProducts.map((item) => (
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {oneProduct.map((item) => (
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
