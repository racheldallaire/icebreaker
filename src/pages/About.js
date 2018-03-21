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
        <span className="tiny">why choose us</span>
              <p/><h1 className="serifHead">The friends you really want.</h1>
              <p/>Our matching process uses an algorithm based on filters chosen by you. And when filters aren't enough, you can always search profiles by key words to quickly find common interests.
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
