import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';



const Matches = (props) => {
  return (

    <div>

      <Button className="reject-user">Reject</Button>
      <Button className="like-user">Like</Button>
        <Card className="matchesUserCard">
          <CardImg top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Alex Kim</CardTitle>
            <CardSubtitle>Age 30 Female</CardSubtitle>
            <CardText> A quick description about myself</CardText>
          </CardBody>
        </Card>
    </div>

  );
};


export default Matches