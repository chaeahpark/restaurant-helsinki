import React from "react";
import DisplayItem from "./DisplayItem";

//TODO: find a way to create a unique key.

const DisplayList = ({ restaurants }) => {
  return (
    <div className="ui link cards">
      {restaurants.map((restaurant, index) => {
        const { delivery_price, description, image, name, tags } = restaurant;
        return (
          <DisplayItem
            key={index}
            delivery_price={delivery_price}
            description={description}
            image={image}
            name={name}
            tags={tags}
          />
        );
      })}
    </div>
  );
};

export default DisplayList;
