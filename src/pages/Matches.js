import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter, Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';


class Matches extends React.Component{
  constructor(){
    super();

    // only adding functions not defined by super

    this.state = {
      hasData: false,
      users:[]
    }
  }

  componentDidMount(e){
      axios.get('/api/matches')
      .then(response => {
        console.log(response.data)
        this.setState({
            hasData: true,
            users: response.data
        });
      })
    }

// removeFromMatchesArray(e){
//   console.log("remove from Matches clicked")
//     event.preventDefault();
//       axios.get('/api/matches')
//       .then(response => {
//         console.log("remove response", response)
//         var matches = response.data
//         matches = matches.reverse.shift()
//         console.log(matches)
//         this.setState({
//             hasData: true,
//             users: matches
//         });
//       })
//   }



  render() {

    var usercard = 'data here';
    if (this.state.hasData) {
      var matchesArray = this.state.users
       for (let user of  matchesArray ){
        console.log("user", user)
        usercard =
      <div>
    <Container fluid>
    <Row>

    <Col xs="6" sm="3">
    <Button  className="reject-user">✘</Button>
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
    <Button  className="like-user">✔</Button>
    </Col>

        </Row>
        </Container>
    </div>
        }
     }

  return (
      <div>
        {usercard}
      </div>



    );
  }
}


export default Matches;


