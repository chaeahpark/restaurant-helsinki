import React from "react";

class Canvas extends React.Component {
  //TODO: Load image in canvas tag
  //TODO: Use blurhash library

  render() {
    return (
      <div className="image">
        <img
          src={this.props.image}
          alt={this.props.name}
          width="200"
          height="150"
        ></img>
      </div>
    );
  }
}

export default Canvas;
