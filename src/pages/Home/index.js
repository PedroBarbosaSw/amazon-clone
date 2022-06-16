import React from "react";
import Product from "../../components/Product";
import "./styles.css";

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
          <Product
            id="151313"
            title="The lean startup"
            price={29}
            image="https://m.media-amazon.com/images/I/81qdu8X7DuL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="312123"
            title="The lean startup"
            price={29}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="43243"
            title="The lean startup"
            price={29}
            image="https://m.media-amazon.com/images/I/61Y-ePbls9L._AC_SY200_.jpg"
            rating={2}
          />
          <Product
            id="3175672123"
            title="The lean startup"
            price={29}
            image="https://m.media-amazon.com/images/I/61Iv3azVIcL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="56"
            title="The lean startup"
            price={29}
            image="https://m.media-amazon.com/images/I/51taFC2kKnL._AC_SY200_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            id="4324109"
            title="The lean startup"
            price={29}
            image="https://m.media-amazon.com/images/I/61-0STTvWaL._AC_SY200_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
