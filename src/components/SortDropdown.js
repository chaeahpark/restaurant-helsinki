import React from "react";
import "./SortDropdown.css";

class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDownValue: "AtoZ" };
  }

  // When a user changes the dropdown option
  handleChange = event => {
    event.preventDefault();
    // Take the user input and
    // set it to the variable 'userChoice'.
    let userChoice = event.target.value;
    // Render the list of restaurants based on the user choice.
    this.props.createRestaurantArr(userChoice);
    // Update the state 'dropDownValue'
    this.setState({ dropDownValue: userChoice });
  };

  render() {
    return (
      <div className="field">
        <label id="sortTitle">Sort in: </label>
        <select
          className="dropdown"
          value={this.state.dropDownValue}
          onChange={this.handleChange}
        >
          <option className="dropdown__option" value="AtoZ">
            ascending order (A-Z)
          </option>
          <option className="dropdown__option" value="ZtoA">
            descending order (Z-A)
          </option>
        </select>
      </div>
    );
  }
}

export default SortDropdown;
