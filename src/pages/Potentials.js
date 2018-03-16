import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
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
    console.log("HEY YOU, THAT WAS MY ID!: ", this.state.potentials[0].id);
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
    let current_user_id =  this.state.potentials[0].id;

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

      if(this.state.alreadyLiked.indexOf(current_user_id) >= 0){
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


    if (this.state.hasData) {
      var user= this.state.potentials[0];

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

     }

  return (

      <div>
    <Container fluid>
    <Row>

    <Col sm={{ size: 3, offset: 2 }} className="err">
    Looks like you don't have any available matches yet. Check back soon!
    </Col>

    <Col sm="5">
    <img src="https://www.earthrangers.com/public/content/wildwire/polarbear-in-water.png"/>
    </Col>

    </Row>
    </Container>

    </div>
    );
  }
}


export default Potentials;