import React from "react";
import Image from 'react-bootstrap/Image'
import image1 from './green.png'
import image2 from './red.jpg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MainContent extends React.Component {
  renderImage(imgSrc) {
    return <Image src={imgSrc} roundedCircle fluid/>
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>{this.renderImage(image1)}</Col>
          <Col>{this.renderImage(image2)}</Col>
        </Row>
        <Row>
          <Col>{this.renderImage(image1)}</Col>
          <Col>{this.renderImage(image2)}</Col>
        </Row>
      </Container>
    );
  }
}

export default MainContent
