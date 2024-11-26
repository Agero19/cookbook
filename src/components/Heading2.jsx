import React from "react";

const Heading2 = ({ title, text }) => {
  return (
    <div className="heading centered-content">
      <h2>{title}</h2>
      {text ? <p className="subheading">{text}</p> : ""}
    </div>
  );
};

export default Heading2;
