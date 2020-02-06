import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.imageSrc = this.props.image;
  }

  // When the app is loaded,
  // display a image to each card.
  componentDidMount() {
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = this.imageSrc;
    // Set the image ratio to be displayed on the browser.
    const myRatio = 0.7;
    // The image width to be displayed on the browser.
    canvas.width = 290;
    // Set a canvas height based on myRation and canvas width.
    canvas.height = canvas.width * myRatio;

    image.onload = () => {
      // The width of the original image.
      let nWidth = image.naturalWidth;
      // The height of the original image.
      let nHeight = image.naturalHeight;
      // The ratio of the original image.
      let nRatio = nHeight / nWidth;

      // If the original image's height is taller than my canvas frame.
      if (nRatio > myRatio) {
        // Calculate the target canvas height
        // based on the width of the original image and myRatio.
        let targetHeight = nWidth * myRatio;
        // Calculate y coordinate to define where to start clipping.
        // The value is the center point of the original img 's height.
        let cropSy = (nHeight - targetHeight) / 2;
        // The height of the clipped image.
        let cropSheight = nHeight - (nHeight - targetHeight);

        context.drawImage(
          image,
          0,
          cropSy,
          nWidth,
          cropSheight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
      // If the picture's width is wider than my canvas frame.
      else {
        // Calculate the target width
        // based on the height of the original image and myRatio.
        let targetWidth = nHeight / myRatio;
        // Calculate x coordinate to define where to start clipping.
        // It is the center point of the original img's width.
        let cropSx = (nWidth - targetWidth) / 2;
        // The width of the clipped image.
        let cropSwidth = nWidth - (nWidth - targetWidth);

        context.drawImage(
          image,
          cropSx,
          0,
          cropSwidth,
          nHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    };
  }

  render() {
    return (
      <div className="image">
        <canvas ref="canvas" style={{ width: "100%", height: "100%" }}></canvas>
      </div>
    );
  }
}

export default Canvas;
