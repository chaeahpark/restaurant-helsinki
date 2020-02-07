import React from "react";
import DisplayItem from "./DisplayItem";
import "./DisplayList.css";

const DisplayList = ({ restaurants }) => {
  return (
    <div className="cards">
      {/* Generate a new array which is made up of DisplayItem component. 
      DisplayItem is created with every element in the state 'restaurants' array. */}
      {restaurants.map(restaurant => {
        const {
          delivery_price,
          description,
          image,
          name,
          tags,
          id
        } = restaurant;

        let deliveryPriceStr = (delivery_price / 100).toFixed(2);

        return (
          <DisplayItem
            key={id}
            delivery_price={deliveryPriceStr}
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
