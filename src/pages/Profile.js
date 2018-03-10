import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

const Profile = (props) => {
	return (
		<Container fluid>
		<Row>
		<Col sm="4">
	  <div>
      <Card>
        <CardBody>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle>Name, Age</CardTitle>
          <CardTitle>Gender</CardTitle>
          
          <Button>Edit</Button>
        </CardBody>
      </Card>
    </div>
</Col>
</Row>
</Container>
    );
};
	

export default Profile

// const userIdMatches = [1, 2, 3];
// const Matches= (props) => {
//   return (
//   );
// };
