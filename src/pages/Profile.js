import React from 'react'
import { Card, CardImg, CardText, CardHeader, CardFooter, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import Slider from './Slider.js'


export default class Profile extends React.Component {

  render() {
  return (
    <div>

      <Container fluid>
      <Row>

        <Col sm="7">
            <Card>
              <CardBody className="card-body">
              <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" alt="Card image cap" /><p/>
                <CardTitle>First Name Last Name</CardTitle>
                <p>Age | Gender</p>
                <Button color="primary" size="sm">Edit your information</Button>
              </CardBody>
              <CardFooter>Bio goes here</CardFooter>
            </Card>
        </Col>

        <Col sm="5">
          <Card>
            <CardBody className="card-body">
            <CardTitle>Age</CardTitle>
            <CardTitle>Location</CardTitle>
            <CardTitle>Gender</CardTitle>

            <CardText>

            <div className="slidecontainer">
              <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"/>
            </div>

            </CardText>
            <Button color="primary" size="sm"> Change Preferences</Button>
            </CardBody>
            <CardFooter>Something goes here</CardFooter>
          </Card>
        </Col>

      </Row>
      </Container>
    </div>
    )
  }
}