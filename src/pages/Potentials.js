import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { faHeart } from '@fortawesome/fontawesome-free-solid';


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
        console.log("response.data", response.data)
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
    var data = []
     data = this.state.potentials
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

  }

  render() {


    var usercard = 'Not able to find Potential Matches';

    if (this.state.hasData) {
      var user= this.state.potentials[0]
       // for (let user of  matchesArray){
        console.log("user", user)
        usercard =
      <div>
    <Container fluid>
    <Row>

    <Col sm={{ size: 6, offset: 3 }}>
        <Card>
            <CardBody className="card-body">
            <CardImg top src={user.facebook_picture_url} /><p/>
            <CardTitle>{user.first_name}  {user.last_name} </CardTitle>
            <p> {user.age}  | {user.gender} </p>
          </CardBody>
          <CardFooter>{user.description}</CardFooter>
        </Card>

        <Button onClick={this.removeFromMatchesArray}  value={user.id } className="reject-user"><FontAwesomeIcon icon={faTimes} /></Button>

        <Button onClick={this.addToUserLikes}  value={user.id }  className="like-user"><FontAwesomeIcon icon={faHeart} /></Button>
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