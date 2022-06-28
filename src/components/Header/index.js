import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useBasketValue } from "../../store/BasketContext/BasketProvider";
import { useAuthValue } from "../../store/AuthContext/AuthProvider";
import { auth } from "../../firebase";

function Header() {
  const navigate = useNavigate();
  const [{ basket }] = useBasketValue();
  const [{ user }] = useAuthValue();

  const handleAuthentication = () => {
    if (!user) {
      navigate("/login");
    }

    if (user) {
      auth.signOut();
    }
  };

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
        <div className="header__option active" onClick={handleAuthentication}>
          <span className="header__optionLineOne">
            Hello {user?.email || "Guest"}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
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
