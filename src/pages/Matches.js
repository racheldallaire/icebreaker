import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const userIdMatches = [1, 2, 3];

const Matches= (props) => {

  return (

    <div>
      <Card>
        <CardImg top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Alex Kim</CardTitle>
          <CardSubtitle>Age 30 Female</CardSubtitle>
          <CardText> A quick tagline about myself</CardText>
          <Button>Like</Button>
          <Button>Reject</Button>
        </CardBody>
      </Card>
    </div>

  );
};






export default Matches