import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';


const Matches = (props) => {

  return (
    <div>
    <Container fluid>
    <Row>

    <Col xs="6" sm="3">
    <Button className="reject-user">✘</Button>
    </Col>

    <Col xs="12" sm="6">
        <Card>
            <CardBody className="card-body">
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" /><p/>
            <CardTitle>Alex Kim</CardTitle>
            <p>30 | Female</p>
            <p> A quick description about myself</p>

          </CardBody>
          <CardFooter>Something goes here</CardFooter>
        </Card>
        </Col>

    <Col xs="6" sm="3">
    <Button className="like-user">✔</Button>
    </Col>

        </Row>
        </Container>
    </div>
  );
};


export default Matches