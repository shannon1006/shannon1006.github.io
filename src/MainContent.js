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
  largeImg: {
    transform: 'scale(0.8)',
    transition: "all 0.1s ease-in",
    backgroundColor: 'black',
    opacity: '0.5',
    position: 'relative',
    top: '-20px',
  },
  smallImg: {
    transform: 'scale(0.7)',
    transition: "all 0.1s ease-in",
    position: 'relative',
    top: '-20px',
  },
  profile: {
    width: "100%",
  },
  secondRow: {
    position: 'relative',
    top: '-40px',
  }
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
    var dynamicStyleImage = styles.smallImg;
    var dynamicStyleText = {
      textAlign: 'center',
      fontFamily: "Poppins",
      fontWeight: "thin",
      position: "relative",
      top: '-50px',
    };
    if (this.state.hover) {
      dynamicStyleImage = styles.largeImg;
      dynamicStyleText.textDecoration = 'underline';
      dynamicStyleText.color = 'black';
      dynamicStyleText.weight = 'bold';
    } else {
      dynamicStyleImage = styles.smallImg;
      dynamicStyleText.textDecoration = 'none';
      dynamicStyleText.color = 'gray';
      dynamicStyleText.weight = 'thin';
    }
    return (
      <div style={styles.profile} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <Image src={this.props.source} roundedCircle fluid
          style={dynamicStyleImage} />
        <h5 style={dynamicStyleText}>
          {this.props.title}
        </h5>
      </div>
    );
  }
}

class MainContent extends React.Component {

  render() {
    const result = (
      <Container>
        <Row>
          <Col><Profile source={image1} title="Blog"/></Col>
          <Col><Profile source={image2} title="Photos" /></Col>
          <Col><Profile source={image3} title="Music" /></Col>
        </Row>
        <Row style={styles.secondRow}>
          <Col><Profile source={image4} title="Fitness" /></Col>
          <Col><Profile source={image5} title="Plans" /></Col>
          <Col><Profile source={image6} title="Travel" /></Col>
        </Row>
      </Container>
    );

    return(result);
  }
}

export default MainContent
