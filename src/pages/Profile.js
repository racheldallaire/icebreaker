import React from 'react'
import { Card, CardImg, CardText, CardHeader, CardFooter, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


const Profile = (props) => {
  return (
    <div>
      <Container fluid>
      <Row>

        <Col sm="6">
            <Card>
              <CardHeader className="card-header"><b>Your profile</b></CardHeader>
              <CardBody>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardTitle>First Name Last Name</CardTitle>
                <CardTitle>Age</CardTitle>
                <CardTitle>Gender</CardTitle>
                <Button color="primary" size="sm">Edit your information</Button>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
        </Col>

        <Col sm="6">
          <Card>
            <CardHeader><b className="card-head">What you're looking for:</b></CardHeader>
            <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="primary" size="sm"> Change Preferences</Button>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>

      </Row>
      </Container>
    </div>
    );
};


export default Profile


