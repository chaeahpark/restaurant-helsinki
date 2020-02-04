import React from "react";
import Canvas from "./Canvas";

const DisplayItem = ({ delivery_price, description, image, name, tags }) => {
  return (
    <div className="card">
      <div>
        <Canvas image={image} name={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">{delivery_price}</span>
        <span className="left floated">
          {tags[0]}, {tags[1]}
        </span>
      </div>
    </div>
  );
};

export default DisplayItem;
