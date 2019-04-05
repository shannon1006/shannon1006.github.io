import React from "react";
import Image from 'react-bootstrap/Image'
import image1 from './images/IMG_4543.jpg'
import image2 from './images/IMG_4144.jpg'
import image3 from './images/IMG_3450.jpg'
import image4 from './images/IMG_5278.JPG'
import image5 from './images/DSC_0446.JPG'
import image6 from './images/DSC_0451.JPG'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const styles = {
  firstRow: {
    paddingTop: '15px',
  },
  largeImg: {
    transform: 'scale(0.9)',
    transition: "all 0.1s ease-in",
    backgroundColor: '#000',
    opacity: '0.5',
  },
  smallImg: {
    transform: 'scale(0.8)',
    transition: "all 0.1s ease-in",
  },
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {hover: false};
  }

  onMouseOver() {
    this.setState({hover: true});
  }

  onMouseOut() {
    this.setState({hover: false});
  }

  render() {
    var dynamicStyle = styles.smallImg;
    if (this.state.hover) {
      dynamicStyle = styles.largeImg;
    } else {
      dynamicStyle = styles.smallImg;
    }
    return (
      <Image src={this.props.source} roundedCircle fluid
        onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
        style={dynamicStyle}
      />);
  }
}

class MainContent extends React.Component {

  render() {
    const result = (
      <Container>
        <Row>
          <Col><Profile source={image1} /></Col>
          <Col><Profile source={image2} /></Col>
          <Col><Profile source={image3} /></Col>
        </Row>
        <Row>
          <Col><Profile source={image4} /></Col>
          <Col><Profile source={image5} /></Col>
          <Col><Profile source={image6} /></Col>
        </Row>
      </Container>
    );

    return(result);
  }
}

export default MainContent
