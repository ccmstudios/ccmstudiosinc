import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from '../assets/images/ccmlogotransparent.png'

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Card className="text-center" id="about">
            <h1>ABOUT US</h1>

          <Card.Body>
            <Card.Title>Creative Concepts Manifested</Card.Title>
            <Card.Text>
                <p>
              Creative Concepts Manifested was founded in 2015 as a company that
              offers a suite of services designed with creatives and innovators
              in mind. Taking an idea and bringing it to life is hard. The
              countless hours spent brainstorming ideas, turning your thoughts
              into something tangible, and then attempting to share that with
              the world can be terrifying. At CCM Studios, our goal is to ease
              that burden by helping you put your ideas on the forefront for the
              world to see. The Internet is the largest billboard in the world,
              but without a great website, its nearly impossible for you to be
              seen. We offer simple and affordable options for creatives, new
              businesses, and brands to begin their online journey and put their
              digital footprint on the map. Start today by selecting one of our
              Web design services below.
            <img src={logo} className="App-logo" alt="logo" />

                </p>
          <h5 className="text-muted">CCM Studios LLC</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default About;
