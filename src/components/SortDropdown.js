import React from "react";

class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDownValue: "AtoZ" };

    this.handleChange = this.handleChange.bind(this);
  }

  //When a user changes the dropdown option
  handleChange = event => {
    event.preventDefault();

    let userChoice = event.target.value;
    //Render the list of restaurants based on the user choice.
    this.props.createRestaurantArr(userChoice);
    //Update the state 'dropDownValue'
    this.setState({ dropDownValue: userChoice });
  };

  render() {
    return (
      <div className="field three wide column">
        <label>Sort in</label>
        <select
          className="ui fluid dropdown"
          value={this.state.dropDownValue}
          onChange={this.handleChange}
        >
          <option value="AtoZ">ascending order (A-Z)</option>
          <option value="ZtoA">descending order (Z-A)</option>
        </select>
      </div>
    );
  }
}

export default SortDropdown;
