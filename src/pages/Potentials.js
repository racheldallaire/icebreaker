import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';


class Potentials extends React.Component{
  constructor(){
    super();

    // only adding functions not defined by super

    this.state = {
      hasData: false,
      potentials :[]
    }
     this.removeFromMatchesArray = this.removeFromMatchesArray.bind(this);
     this.addToUserLikes = this.addToUserLikes.bind(this);
  }

  componentDidMount(e, props){
      axios.get('/api/potentials')
      .then(response => {
        this.setState({
            hasData: true,
            potentials: response.data
        });
      })
    }

  removeFromMatchesArray(e){
    console.log("remove from Potentials clicked")
    var data = []
     data = this.state.potentials
        this.setState({
            hasData: true,
            potentials: data.splice(1)
        });
      console.log("this.state.potentials[0]", this.state.potentials[0])
        console.log("target userid", this.state.potentials[0].id)
      axios.post('/api/matches', {
        user2: this.state.potentials[0].id,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    // axios.post('/api/matches', this.state.potentials)
  }

  addToUserLikes(e){
    var data = []
     data = this.state.potentials
        this.setState({
            hasData: true,
            potentials: data.splice(1)
        });
      console.log(this.state.potentials)
    // axios.post('/api/matches', this.state.potentials)
  }

  render() {

    var usercard = 'You are out of Matches';
    if (this.state.hasData) {
      var user= this.state.potentials[0]
       // for (let user of  matchesArray){
        console.log("user", user)
        usercard =
      <div>
    <Container fluid>
    <Row>

    <Col xs="6" sm="3">
    <Button onClick={this.removeFromMatchesArray}  value={user.id } className="reject-user">✘</Button>
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
    <Button onClick={this.addToUserLikes}  value={user.id }  className="like-user">✔</Button>
    </Col>
        </Row>
        </Container>
    </div>
     } else if
      (this.state.potentials.length < 0){
      usercard = 'Sorry, You are out of Matches';
     }

  return (
      <div>
        {usercard}
      </div>
    );
  }
}


export default Potentials;