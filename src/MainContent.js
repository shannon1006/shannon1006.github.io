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

import Radium from 'radium';

const styles = {
  row: {
    padding: '30px'
  },
  col: {

  },
  profileImage: {

  }
};

class MainContent extends React.Component {

  renderImage(imgSrc) {
    return <Image src={imgSrc} roundedCircle fluid style={styles.profileImage}/>
  }

  render() {
    return(
      <Container>
        <Row style={styles.row}>
          <Col>{this.renderImage(image1)}</Col>
          <Col>{this.renderImage(image2)}</Col>
          <Col>{this.renderImage(image3)}</Col>
        </Row>
        <Row style={styles.row}>
          <Col>{this.renderImage(image4)}</Col>
          <Col>{this.renderImage(image5)}</Col>
          <Col>{this.renderImage(image6)}</Col>
        </Row>
      </Container>
    );
  }
}

export default Radium(MainContent)
