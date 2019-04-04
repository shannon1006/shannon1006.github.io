import React from 'react';
import {Element, Events, animateScroll as scroll} from 'react-scroll'
import MainContent from './MainContent';
import imgUrl from "./images/background.jpg"

const styles = {
  landing: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  header: {
    color: 'white',
    fontFamily: 'Quicksand',
    fontWeight: "500",
    fontSize: "60px",
    position: 'absolute',
    top: '50%',
    left: '5%',
    textDecoration: 'underline',
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <Element  style={styles.landing}>
          <div>
            <h1 style={styles.header}>LANDING PAGE</h1>
          </div>
        </Element>
        <Element><MainContent /></Element>
      </div>
    );
  }
}

export default Section
