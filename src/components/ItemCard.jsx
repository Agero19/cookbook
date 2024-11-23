import React from 'react'

function ItemCard() {
  return (
    <div className="col">

      <div className="recipe">
        <div className="image-wrapper">
          {/* <img
            src={recipe}
            alt="dish"
          /> */}

          <button className="liked">
            {/* <img
              src={insta}
              alt="heart"
            /> */}
          </button>
        </div>

        <p className="recipe-name">
          <div className="truncate-two-lines">
            Fresh and Healthy Mixed Mayonnaise Salad Fresh and Healthy Mixed Mayonnaise Salad
          </div>
        </p>

        <ul className="tags">
          <li>
            {/* <img
              src={insta}
              alt="time"
            /> */}
            30 Minutes
          </li>

          <li>
            {/* <img
              src={insta}
              alt="type"
            /> */}
            Healthy
          </li>
        </ul>
      </div>

    </div>
  )
}

export default ItemCard