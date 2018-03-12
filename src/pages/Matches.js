import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
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
      <Button className="reject-user">Reject</Button>
      <Button className="like-user">Like</Button>
        <Card className="matchesUserCard">
          <CardImg top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle> Alex Kim</CardTitle>
          <div className="clearfix wrapper">
          {content}
        </div>
            <CardSubtitle> 30 female </CardSubtitle>

            <CardText> A quick description about myself</CardText>
          </CardBody>
        </Card>
    </div>
    );
  }
}


export default Matches;


