import React, {Component} from 'react';
import axios from 'axios';
import Message from './Message.js';
import { Button, Col, Container, Row  } from 'reactstrap';
export default class MessageList extends Component {
  constructor(props) {
    super(props);
    console.log("Message list props", props)
    this.state = {

    }
     // this.chattingWithUser = this.chattingWithUser.bind(this);
  }

  componentDidMount(e){
    // axios.get('/api/message_list')
    //   .then(response => {
    //     this.setState({
    //         matches: response.data
    //     });
    //     console.log("MESSAGE LIST MATCHED 1", response.data)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  //   handleClick(e){
  //     console.log("handleClick", e.target.value )
  //   this.props.chattingWithUser(e.target.value)
  // }

  render () {
    //onClick={this.props.chattingWithUser} changed={( event ) => this.props.changed( event, matches.id )
    const matchedChat = this.props.matches.map((matches) => {
            return <li key={matches.id}  onClick= {this.props.chattingWithUser}  value={matches.id}   className="person">
                    <img src={matches.facebook_picture_url} alt="" />
                    <span className="name">{matches.first_name} {matches.last_name}</span>

                  </li>
    });


      return (

        <Col sm="5">
          <div className="left">

              <div className="top">
                  <input type="text" />
              </div>

              <ul className="people">

                  {matchedChat}


              </ul>
          </div>
        </Col>
      )
  }
}