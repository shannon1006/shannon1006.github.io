import React from 'react';
import { Element, Events, scroller} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import MainContent from './MainContent';
import { SocialIcon } from 'react-social-icons';
import imgUrl from "./images/background.jpg"

const styles = {
  landing: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    fontFamily: 'Quicksand',
    color: 'white',
  },
  header2: {
    position: "absolute",
    top: "60%",
    left: "5%",
  },
  intro: {
    position: "absolute",
    top: "70%",
    left: "5%",
    width: "40%",
    fontStyle: "italic",
  },
  header: {
    fontWeight: "500",
    fontSize: "60px",
    position: 'absolute',
    top: '40%',
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
  },
  icon: {
    position: "relative",
    align: "right",
    top: "5px",
    left: "97%",
    width: "25px",
    padding: "5px",
    height: "25px",
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
        <Element style={styles.landing}>
          <div>
            <h1 style={styles.header}>Express Yourself</h1>
            <h4 style={styles.header2}>Shannon's personal space</h4>
            <p style={styles.intro}>I am passionate about technology, traveling and photography. Currently working in the bay area.
              Find my resume <a href="https://shannonwang.site/resume.pdf" style={{textDecoration: "underline"}}>here</a>.</p>
            <SocialIcon style= {styles.icon} bgColor="white" url="https://www.linkedin.com/in/shannon-wang-6b222090/" />
            <br />
            <SocialIcon style= {styles.icon} bgColor="white" url="https://github.com/shannon1006" />
            <br />
            <SocialIcon style= {styles.icon} bgColor="white" url="https://www.instagram.com/shannonwang1006/" />
            <br />
            <SocialIcon style= {styles.icon} bgColor="white" url="https://open.spotify.com/user/12120682295" />
            <br />
            <div onClick={() => this.scrollTo()}><FontAwesomeIcon icon={faChevronDown} style={styles.button} /></div>
          </div>
        </Element>
        <Element name="content-start"><MainContent /></Element>
      </div>
    );
  }
}

export default Section
