import React from "react";

const Category = ({ name, image, color }) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const gradientStyle = {
    background: `linear-gradient(
      180deg,
      rgba(${hexToRgb(color)}, 0) 0%,
      rgba(${hexToRgb(color)}, 0.1) 47%
    )`,
  };

  return (
    <div
      className="category"
      style={gradientStyle}
    >
      <div className="image-wrapper">
        <img
          src={image}
          alt={name}
        />

        <div className="shadow-wrapper">
          <img
            src="/images/shadow-cat.svg"
            alt="shadow"
          />
        </div>
      </div>

      <p className="category-name">{name}</p>
    </div>
  );
};

export default Category;
