import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const About = (props) => {
  return (
    <div>

      <Container fluid>
      <Row>

      <Col sm="7">
        <div className="aboutPic"/>
      </Col>

      <Col className="blue" sm={{ size: 6, offset: 5 }}>
            <div>
            <span className="tiny">about <b>icebreaker</b></span>
            <p/><h1 className="serifHead">Making friends made simple.</h1>
            <p/>It's not easy to make connections in today's fast-paced world. Icebreaker is here to help. We want to make big cities feel a little less big, and a lot more friendly.

            </div>
      </Col>

      </Row>

      <Row>
      <Col className="info" sm={{ size: 6, offset: 3 }}>
        <div>
        <span className="tiny">our vision</span>
        <p/><h2 className="serifHead"> The first move is always the hardest. </h2>
        <p/> That's why our in-chat gaming system is here -- we'll break the ice, so that you don't have to. We've developed games to help you really get to know people quicker.

        </div>
      </Col>
      </Row>

      <Row>
      <Col className="blue2" sm={{ size: 6, offset: 1 }}>
      <div>
        <span className="tiny">more stuff</span>
              <p/><h1 className="serifHead">I have more to say.</h1>
              <p/>And this is where I'm gonna say it. I've been looking for a driver who's qualified, so if you think you're the one, step into my ride. I'm a fine-tuned, supersonic speed machine; got a sunroof top and a gangsta lead.
      </div>
      </Col>

      <Col sm={{ size: 7, offset: 5 }}>
      <div className="otherPic"/>
      </Col>

      </Row>
      </Container>

    </div>

    );
};

export default About;
