import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const Friends = (props) => {

  return (

    <div>

        <Card className="friendsUserCard">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Alex Kim</CardTitle>
            <CardSubtitle>Age 30 Female</CardSubtitle>
          </CardBody>
        </Card>
    </div>

  );
};


export default Friends