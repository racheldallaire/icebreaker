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
     console.log("hi")
    // var that = this;
      axios.get('/api/matches')
      .then(response => {
        console.log(response.data)
        this.setState({
            hasData: true,
            users: response.data
        });
      })
    }


  render() {

    var content = 'data here';
    if (this.state.hasData) {
      console.log("hey there")
        content =
          <div>
             <h1> {this.state.users[1].age}</h1>
          </div>

        console.log("content", content)
    }

  return (
    <div>
    <Container fluid>
    <Row>

    <Col xs="6" sm="3">
    <Button className="reject-user">✘</Button>
    </Col>

    <Col xs="12" sm="6">
        <Card>
            <CardBody className="card-body">
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180" /><p/>
            <CardTitle>Alex Kim</CardTitle>
            <div className="anything">{content}</div>
            <p>30 | Female</p>

          </CardBody>
          <CardFooter>A quick description about myself</CardFooter>
        </Card>
        </Col>

    <Col xs="6" sm="3">
    <Button className="like-user">✔</Button>
    </Col>

        </Row>
        </Container>
    </div>
    );
  }
}


export default Matches;


