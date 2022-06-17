import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useBasketValue } from "../../store/BasketContext/BasketProvider";

function Header() {
  const navigate = useNavigate();
  const [{ basket }] = useBasketValue();

  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
        onClick={() => navigate("/")}
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option" onClick={() => navigate("/login")}>
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <div
        className="header__optionBasket"
        onClick={() => navigate("/checkout")}
      >
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">
          {basket?.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
