import React from 'react';
import BackgroundImage from "react-background-image";
import image from './IMG_4147.jpg'
class Background extends React.Component {
  render() {
    return (
      <BackgroundImage
          src={image}
          className="myCustomClass"
        ></BackgroundImage>
      );
  }
}

export default Background;
