import React, { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import AlarmIcon from "@mui/icons-material/Alarm";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const ItemCard = ({ name, image, title }) => {
  const [favState, setFavState] = useState(false);

  const favHandler = () => {
    setFavState(!favState);
  };

  return (
    <div className="col">
      <div className="recipe">
        <div className="image-wrapper">
          <img
            src={image}
            alt={name}
          />

          <button
            className="liked"
            onClick={favHandler}
          >
            {favState ? (
              <FavoriteIcon style={{ color: "#FF6363" }} />
            ) : (
              <FavoriteIcon style={{ opacity: ".15" }} />
            )}
          </button>
        </div>

        <p className="recipe-name">
          <div className="truncate-two-lines">{title}</div>
        </p>

        <ul className="tags">
          <li>
            <AlarmIcon />
            30 Minutes
          </li>

          <li>
            <RestaurantIcon />
            Healthy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
