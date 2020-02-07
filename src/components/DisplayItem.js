import React from "react";
import Canvas from "./Canvas";
import "./DisplayItem.css";

const DisplayItem = ({ delivery_price, description, image, name, tags }) => {
  return (
    <div className="card">
      <div className="card__image">
        {/* Insert image into canvas  */}
        <Canvas image={image} name={name} />
      </div>
      <div className="card__content">
        <div className="header">{name}</div>
        <div className="description">{description}</div>
      </div>
      <div className="card__extra-content">
        <div className="delivery-price">Delivery fee: €{delivery_price}</div>
        <div className="tags">
          {tags[0]}, {tags[1]}
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
