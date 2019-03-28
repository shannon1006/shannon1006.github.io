import React from 'react';
import BackgroundImage from "react-background-image";
import image from './bonita_lighthouse.JPG'
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
