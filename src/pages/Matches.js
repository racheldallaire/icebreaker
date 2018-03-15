import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';


class Matches extends React.Component{
  constructor(){
    super();

    this.state = {
      hasData: false,
      matchedUsers :[]
    }
     this.removeFromFriendsArray = this.removeFromFriendsArray.bind(this);
  }

  componentDidMount(e, props){
      axios.get('/api/matches')
      .then(response => {
        this.setState({
            hasData: true,
            matchedUsers: response.data

        });
        console.log("matches response.data", response.data)
      })
    }

  removeFromFriendsArray(e){
    console.log("remove from matchedUsers clicked")
    var data = []
      data = this.state.matchedUsers
        this.setState({
            hasData: true,
            matchedUsers: data.splice(1)
        });
        console.log(" removeFromFriendsArray data", data)
    axios.post('/api/friendremoved', {
        user2: this.state.matchedUsers[0].id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    var userContainer = 'You are have no Matches';
    if (this.state.hasData) {

      for (let user of this.state.matchedUsers) {
        userContainer =
            <div>
                <Container fluid>
                <Row>

                <Col xs="6" sm="3">
                <Button onClick={this.removeFromFriendsArray}  value={user.id } className="remove-friend">✘</Button>
                </Col>

                <Col xs="12" sm="6">
                    <Card>
                        <CardBody className="card-body">
                        <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" /><p/>
                        <CardTitle>{user.first_name}  {user.last_name} </CardTitle>
                        <p> {user.age}  | {user.gender} </p>
                        <p> A quick description about myself</p>
                      </CardBody>
                      <CardFooter>Something goes here</CardFooter>
                    </Card>
                    </Col>
                    <Col xs="6" sm="3">

                </Col>
                </Row>
              </Container>
          </div>
          }

     } else if
      (this.state.matchedUsers.length < 0){
      usercard = 'Sorry, You have no friends.';

     }

  return (
      <div>
        {userContainer}
      </div>
    );
  }
}

export default Matches;

