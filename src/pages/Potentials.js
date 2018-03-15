import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Alert from 'react-s-alert';


class Potentials extends React.Component{
  constructor(){
    super();

    // only adding functions not defined by super

    this.state = {
      hasData: false,
      potentials : [],
      alreadyLiked : []
    };
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
        console.log("response.data", response.data);
      });

      axios.get('/api/alreadyLiked')
      .then(response => {
        this.setState({
            alreadyLiked: response.data

        });
        console.log("AlreaDy Liked: ", response.data);
      });
    }

  removeFromMatchesArray(e){
    console.log("remove from Potentials clicked");
    var data = [];
      data = this.state.potentials;
        this.setState({
            hasData: true,
            potentials: data.splice(1)
        });
    axios.post('/api/matchesrejected', {
        user2: this.state.potentials[0].id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  addToUserLikes(e){
    var data = [];
     data = this.state.potentials;
        this.setState({
            hasData: true,
            potentials: data.splice(1)
        });
        axios.post('/api/matchesliked', {
        user2: this.state.potentials[0].id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      if(this.state.alreadyLiked.indexOf(this.state.potentials[0]) >= 0){
      e.preventDefault();
        Alert.success('Wooh that\'s a match!', {
            position: 'top-right',
            effect: 'jelly',
            onShow: function () {
                console.log('aye!');
            },
            beep: false,
            timeout: 2000,
            offset: 100
        });
      }

  }

  render() {


    var usercard = 'Not able to find Potential Matches';

    if (this.state.hasData) {
      var user= this.state.potentials[0];
       // for (let user of  matchesArray){
        console.log("user", user);
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
            <CardImg top src={user.facebook_picture_url} /><p/>
            <CardTitle>{user.first_name}  {user.last_name} </CardTitle>
            <p> {user.age}  | {user.gender} </p>
          </CardBody>
          <CardFooter>{user.description}</CardFooter>
        </Card>
        </Col>
        <Col xs="6" sm="3">
    <Button onClick={this.addToUserLikes} value={user.id }  className="like-user">✔</Button>
    </Col>
        </Row>
        </Container>
    </div>

     } else if
      (this.state.potentials.length < 0){
      usercard = 'Sorry, You are out of Potential Matches';
     }

  return (

      <div>
        {usercard}
      </div>
    );
  }
}


export default Potentials;