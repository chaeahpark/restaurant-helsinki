import React from "react";
//Data about the list of restaurants in Helsinki
import RestaurantData from "./data/restaurants.json";

import SortDropdown from "./SortDropdown";
import DisplayList from "./DisplayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  // Update the state "restaurants" with a newly arranged array.
  createRestaurantArr = dropDownVal => {
    let restaurantList = RestaurantData.restaurants;
    // Sort the original data in ascending or descending alphabetical order based on the dropdown button value.
    if (dropDownVal === "AtoZ") {
      restaurantList = restaurantList.sort((a, b) => {
        let restaurantA = a.name;
        let restaurantB = b.name;
        if (restaurantA < restaurantB) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (dropDownVal === "ZtoA") {
      restaurantList = restaurantList.sort((a, b) => {
        let restaurantA = a.name;
        let restaurantB = b.name;
        if (restaurantB < restaurantA) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    this.setState({ restaurants: restaurantList });
  };

  // Load the list of restaurants in ascending order.
  componentDidMount() {
    this.createRestaurantArr("AtoZ");
  }

  render() {
    return (
      <div className="ui container">
        <SortDropdown createRestaurantArr={this.createRestaurantArr} />
        <DisplayList restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
