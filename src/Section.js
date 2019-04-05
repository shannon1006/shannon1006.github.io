import React from 'react';
import { Element, Events, scroller} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
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
  },
  button: {
    color: 'white',
    width: '3%',
    height: 'auto',
    position: 'absolute',
    top: '91%',
    left: '48%',
  }
}

class Section extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollTo() {
    scroller.scrollTo("content-start", {
      duration: 800,
      delay: 0,
      smooth: 'true'
    })
  }

  render() {
    return (
      <div>
        <Element  style={styles.landing}>
          <div>
            <h1 style={styles.header}>LANDING PAGE</h1>
            <div onClick={() => this.scrollTo()}><FontAwesomeIcon icon={faChevronDown} style={styles.button} /></div>
          </div>
        </Element>
        <Element name="content-start"><MainContent /></Element>
      </div>
    );
  }
}

export default Section
